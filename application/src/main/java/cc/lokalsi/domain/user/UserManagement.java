package cc.lokalsi.domain.user;

import cc.lokalsi.InputPort;
import io.vavr.control.Option;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import static io.vavr.API.*;

public interface UserManagement extends InputPort {

  Try<User> registerUser(RegisterUserRequest request);

  @AllArgsConstructor
  @Slf4j
  @Component
  class UserService implements UserManagement {

    private final UserStorage.EventLog eventLog;

    @Override
    public Try<User> registerUser(RegisterUserRequest registerUserRequest) {

      return validate(registerUserRequest)
          .map(request -> User.of(request.getEmail(), request.getPassword()))
          .andThen(user -> eventLog.store(user.id(), new UserStorage.UserSaved(user)));
    }

    private Try<RegisterUserRequest> validate(RegisterUserRequest registerUserRequest) {
      var maybeEmail =
          Option.of(registerUserRequest.getEmail())
              .filter(email -> !email.getEmail().isEmpty())
              .toTry(() -> new RegisterUserRequestValidationException("Email cannot be empty"));

      var maybePassword =
          Option.of(registerUserRequest.getPassword())
              .filter(password -> !password.getPassword().isEmpty())
              .toTry(() -> new RegisterUserRequestValidationException("Password cannot be empty"));

      var maybeRepeatedPassword =
          Option.of(registerUserRequest.getRepeatedPassword())
              .filter(password -> !password.getPassword().isEmpty())
              .toTry(
                  () ->
                      new RegisterUserRequestValidationException(
                          "Repeated password cannot be empty"));

      var maybePasswordsAreEqual =
          Try.of(
                  () ->
                      registerUserRequest
                          .getPassword()
                          .equals(registerUserRequest.getRepeatedPassword()))
              .flatMapTry(
                  v ->
                      v
                          ? Success(null)
                          : Failure(
                              new RegisterUserRequestValidationException(
                                  "Passwords are not equal")));

      return maybeEmail
          .flatMap(v -> maybePassword)
          .flatMap(v -> maybeRepeatedPassword)
          .flatMap(v -> maybePasswordsAreEqual)
          .map(v -> registerUserRequest);
    }

    static class RegisterUserRequestValidationException extends Exception {
      public RegisterUserRequestValidationException(String message) {
        super(message);
      }
    }
  }

  @Value
  @Builder
  class RegisterUserRequest {
    Email email;
    Password password;
    Password repeatedPassword;
  }
}

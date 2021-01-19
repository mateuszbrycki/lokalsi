package cc.lokalsi.domain.user;

import cc.lokalsi.domain.ride.Ride;
import cc.lokalsi.domain.ride.RideManagement;
import cc.lokalsi.domain.ride.RideStorage;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static io.vavr.API.Success;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

  @Mock private UserStorage.EventLog eventLog;

  @InjectMocks private UserManagement.UserService userService;

  private static final Email ANY_EMAIL = Email.of("ANY_EMAIL");
  private static final Password ANY_PASSWORD = Password.of("pass123");
  private static final Password ANY_PASSWORD_1 = Password.of("pass1234");

  @Test
  public void failsWhenSavingEvent() {
    doThrow(new RuntimeException("cannot store event")).when(eventLog).store(any(), any());

    var user =
        userService.registerUser(
            UserManagement.RegisterUserRequest.builder()
                .email(ANY_EMAIL)
                .password(ANY_PASSWORD)
                .repeatedPassword(ANY_PASSWORD)
                .build());

    assertThat(user.isFailure()).isTrue();
    assertThat(user.getCause())
        .isInstanceOf(RuntimeException.class)
        .hasMessage("cannot store event");
  }

  @Test
  public void buildsRideWithBuilderStoresEvent() {
    doReturn(Success(null)).when(eventLog).store(any(), any());

    var user =
        userService.registerUser(
            UserManagement.RegisterUserRequest.builder()
                .email(ANY_EMAIL)
                .password(ANY_PASSWORD)
                .repeatedPassword(ANY_PASSWORD)
                .build());

    assertThat(user.isSuccess()).isTrue();

    verify(eventLog, times(1))
        .store(
            any(),
            eq(new UserStorage.UserSaved(User.of(user.get().id(), ANY_EMAIL, ANY_PASSWORD))));
  }

  @Test
  public void returnsErrorOnEmailValidation() {
    var user =
        userService.registerUser(
            UserManagement.RegisterUserRequest.builder()
                .password(ANY_PASSWORD)
                .repeatedPassword(ANY_PASSWORD)
                .build());

    assertThat(user.isFailure()).isTrue();
    assertThat(user.getCause())
        .isInstanceOf(UserManagement.UserService.RegisterUserRequestValidationException.class)
        .hasMessage("Email cannot be empty");
  }

  @Test
  public void returnsErrorOnPasswordValidation() {
    var user =
        userService.registerUser(
            UserManagement.RegisterUserRequest.builder()
                .email(ANY_EMAIL)
                .repeatedPassword(ANY_PASSWORD)
                .build());

    assertThat(user.isFailure()).isTrue();
    assertThat(user.getCause())
        .isInstanceOf(UserManagement.UserService.RegisterUserRequestValidationException.class)
        .hasMessage("Password cannot be empty");
  }

  @Test
  public void returnsErrorOnRepeatedPasswordValidation() {
    var user =
        userService.registerUser(
            UserManagement.RegisterUserRequest.builder()
                .email(ANY_EMAIL)
                .password(ANY_PASSWORD)
                .build());

    assertThat(user.isFailure()).isTrue();
    assertThat(user.getCause())
        .isInstanceOf(UserManagement.UserService.RegisterUserRequestValidationException.class)
        .hasMessage("Repeated password cannot be empty");
  }

  @Test
  public void returnsErrorOnNotEqualPasswordsValidation() {
    var user =
        userService.registerUser(
            UserManagement.RegisterUserRequest.builder()
                .email(ANY_EMAIL)
                .password(ANY_PASSWORD)
                .repeatedPassword(ANY_PASSWORD_1)
                .build());

    assertThat(user.isFailure()).isTrue();
    assertThat(user.getCause())
        .isInstanceOf(UserManagement.UserService.RegisterUserRequestValidationException.class)
        .hasMessage("Passwords are not equal");
  }
}

package cc.lokalsi.adapters.web;

import cc.lokalsi.command.RegisterUserCommand;
import cc.lokalsi.cqrs.Gate;
import io.vavr.control.Try;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@Slf4j
public class UserWebService {

  private final Gate gate;

  @RequestMapping("/user")
  @PutMapping
  public ResponseEntity<?> registerUser(@RequestBody RegisterUserRequest request) {
    Try<Void> dispatch =
        gate.dispatch(
            RegisterUserCommand.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .repeatedPassword(request.getRepeatedPassword())
                .build());
    return toResponseEntity(dispatch);
  }

  private ResponseEntity<?> toResponseEntity(Try<?> execution) {
    return execution
        .onFailure(err -> log.error("Error", err))
        .map(result -> new ResponseEntity(HttpStatus.CREATED))
        .getOrElseGet(ex -> new ResponseEntity(ex.getMessage(), HttpStatus.BAD_REQUEST));
  }

  @NoArgsConstructor
  @AllArgsConstructor
  @EqualsAndHashCode
  @Getter
  @Setter
  @ToString
  static class RegisterUserRequest {
    String email;
    String password;
    String repeatedPassword;
  }
}

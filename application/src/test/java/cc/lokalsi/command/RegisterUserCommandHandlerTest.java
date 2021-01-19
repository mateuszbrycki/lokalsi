package cc.lokalsi.command;

import cc.lokalsi.domain.user.Email;
import cc.lokalsi.domain.user.Password;
import cc.lokalsi.domain.user.UserManagement;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class RegisterUserCommandHandlerTest {

  @Mock UserManagement userManagement;

  @InjectMocks RegisterUserCommandHandler handler;

  private static final String ANY_EMAIL = "any-email";
  private static final String ANY_PASSWORD = "any-password";
  private static final String ANY_REPEATED_PASSWORD = "any-repeated-password";

  @Test
    public void verifyThatHandlerTranslatesTheRequestToCommandProperly() {
      RegisterUserCommand command = RegisterUserCommand.builder()
              .email(ANY_EMAIL)
              .password(ANY_PASSWORD)
              .repeatedPassword(ANY_REPEATED_PASSWORD)
              .build();

      handler.handle(command);

      verify(userManagement, times(1)).registerUser(
              UserManagement.RegisterUserRequest.builder()
                      .email(Email.of(ANY_EMAIL))
                      .password(Password.of(ANY_PASSWORD))
                      .repeatedPassword(Password.of(ANY_REPEATED_PASSWORD))
                      .build()
      );
  }
}

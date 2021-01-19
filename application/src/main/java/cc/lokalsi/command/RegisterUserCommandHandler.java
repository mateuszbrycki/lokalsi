package cc.lokalsi.command;

import cc.lokalsi.cqrs.CommandHandler;
import cc.lokalsi.domain.user.Email;
import cc.lokalsi.domain.user.Password;
import cc.lokalsi.domain.user.User;
import cc.lokalsi.domain.user.UserManagement;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@AllArgsConstructor
public class RegisterUserCommandHandler implements CommandHandler<RegisterUserCommand, User> {

    private final UserManagement userManagement;

    @Override
    public Try<User> handle(RegisterUserCommand command) {
        return userManagement.registerUser(of(command));
    }

    private UserManagement.RegisterUserRequest of(RegisterUserCommand command) {
        return UserManagement.RegisterUserRequest.builder()
                .email(Email.of(command.getEmail()))
                .password(Password.of(command.getPassword()))
                .repeatedPassword(Password.of(command.getRepeatedPassword()))
                .build();
    }
}

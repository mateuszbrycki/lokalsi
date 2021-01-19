package cc.lokalsi.command;

import cc.lokalsi.cqrs.Command;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Builder
@Value
@EqualsAndHashCode
public class RegisterUserCommand implements Command {
    private String email;
    private String password;
    private String repeatedPassword;
}

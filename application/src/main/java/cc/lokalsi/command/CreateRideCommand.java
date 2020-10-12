package cc.lokalsi.command;

import cc.lokalsi.cqrs.Command;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateRideCommand implements Command {
    private String name;
}

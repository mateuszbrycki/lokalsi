package cc.lokalsi.command;

import cc.lokalsi.cqrs.Command;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

import java.time.LocalDateTime;
import java.util.UUID;

@Builder
@Value
@EqualsAndHashCode
public class CreateRideCommand implements Command {
  private String name;
  private LocalDateTime rideTime;
  private UUID creator;
}

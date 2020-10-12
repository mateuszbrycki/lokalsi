package cc.lokalsi.command;

import cc.lokalsi.cqrs.Command;
import cc.lokalsi.cqrs.CommandHandler;
import cc.lokalsi.domain.RideManagement;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@AllArgsConstructor
@Component
public class CreateRideCommandHandler
    implements CommandHandler<CreateRideCommand, Command.CommandResult> {

  private final RideManagement rideManagement;

  @Override
  public Command.CommandResult handle(CreateRideCommand command) {
    Try<Void> ride = rideManagement.createRide(of(command));

    return ride.map(result -> Command.CommandResult.SUCCESS)
        .onFailure(exception -> log.error(exception.getMessage()))
        .getOrElse(Command.CommandResult.FAILURE);
  }

  private RideManagement.CreateRideRequest of(CreateRideCommand command) {
    return RideManagement.CreateRideRequest.builder().name(command.getName()).build();
  }
}

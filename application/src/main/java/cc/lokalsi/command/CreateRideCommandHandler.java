package cc.lokalsi.command;

import cc.lokalsi.cqrs.CommandHandler;
import cc.lokalsi.domain.ride.*;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@AllArgsConstructor
public class CreateRideCommandHandler implements CommandHandler<CreateRideCommand, Ride> {

  private final RideManagement rideManagement;

  @Override
  public Try<Ride> handle(CreateRideCommand command) {
    return rideManagement.createRide(of(command));
  }

  private RideManagement.CreateRideRequest of(CreateRideCommand command) {
    return RideManagement.CreateRideRequest.builder()
        .name(command.getName())
        .rideTime(RideTime.of(command.getRideTime()))
        .creator(Creator.of(command.getCreator()))
        .advancementLevel(AdvancementLevel.valueOf(command.getAdvancementLevel()))
        .description(Description.of(command.getDescription()))
        .build();
  }
}

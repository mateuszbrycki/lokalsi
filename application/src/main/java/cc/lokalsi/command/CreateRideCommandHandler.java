package cc.lokalsi.command;

import cc.lokalsi.cqrs.CommandHandler;
import cc.lokalsi.domain.ride.Creator;
import cc.lokalsi.domain.ride.RideManagement;
import cc.lokalsi.domain.ride.RideTime;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@AllArgsConstructor
@Component
public class CreateRideCommandHandler implements CommandHandler<CreateRideCommand, Void> {

  private final RideManagement rideManagement;

  @Override
  public Try<Void> handle(CreateRideCommand command) {
    return rideManagement.createRide(of(command));
  }

  private RideManagement.CreateRideRequest of(CreateRideCommand command) {
    return RideManagement.CreateRideRequest.builder()
            .name(command.getName())
            .rideTime(RideTime.of(command.getRideTime()))
            .creator(Creator.of(command.getCreator()))
            .build();
  }
}

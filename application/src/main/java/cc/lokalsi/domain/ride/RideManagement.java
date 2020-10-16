package cc.lokalsi.domain.ride;

import cc.lokalsi.InputPort;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

public interface RideManagement extends InputPort {

  Try<Void> createRide(CreateRideRequest createRideRequest);

  @AllArgsConstructor
  @Slf4j
  @Component
  class RideService implements RideManagement {

    private final RideBuilder rideBuilder;
    private final RideStorage.EventLog eventLog;

    @Override
    public Try<Void> createRide(CreateRideRequest createRideRequest) {
      Ride ride =
          rideBuilder.build(
              createRideRequest.getName(),
              createRideRequest.getRideTime(),
              createRideRequest.getCreator());
      return Try.run(() -> eventLog.store(new RideStorage.RideSaved(ride)));
    }
  }

  @Value
  @Builder
  class CreateRideRequest {
    String name;
    RideTime rideTime;
    Creator creator;
  }
}

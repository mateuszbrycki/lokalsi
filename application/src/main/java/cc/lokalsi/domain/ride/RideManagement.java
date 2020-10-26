package cc.lokalsi.domain.ride;

import cc.lokalsi.InputPort;
import io.vavr.control.Option;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import static io.vavr.API.For;

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
      return validate(createRideRequest)
          .map(
              request ->
                  rideBuilder.build(request.getName(), request.getRideTime(), request.getCreator()))
          .map( // TODO mbrycki find a more elegant way of handling null
              ride -> {
                eventLog.store(new RideStorage.RideSaved(ride));
                return null;
              });
    }

    private Try<CreateRideRequest> validate(CreateRideRequest createRideRequest) {

      var maybeName =
          Option.of(createRideRequest.getName())
              .filter(name -> !name.isEmpty())
              .toTry(() -> new CreateRideRequestValidationException("Ride name cannot be empty"));

      var maybeCreator =
          Option.of(createRideRequest.getCreator())
              .toTry(
                  () -> new CreateRideRequestValidationException("Ride creator cannot be empty"));

      var maybeRideTime =
          Option.of(createRideRequest.getRideTime())
              .toTry(() -> new CreateRideRequestValidationException("Ride time cannot be empty"));

      return For(maybeName, maybeCreator, maybeRideTime)
          .yield((name, creator, rideTime) -> createRideRequest);
    }

    static class CreateRideRequestValidationException extends Exception {
      public CreateRideRequestValidationException(String message) {
        super(message);
      }
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

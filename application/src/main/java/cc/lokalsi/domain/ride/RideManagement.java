package cc.lokalsi.domain.ride;

import cc.lokalsi.InputPort;
import io.vavr.collection.List;
import io.vavr.control.Option;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import static io.vavr.API.For;

public interface RideManagement extends InputPort {

  Try<Ride> createRide(CreateRideRequest createRideRequest);

  Try<List<Ride>> findAllRides();

  @AllArgsConstructor
  @Slf4j
  @Component
  class RideService implements RideManagement {

    private final RideStorage.EventLog eventLog;
    private final RideStorage.Repository repository;

    @Override
    public Try<Ride> createRide(CreateRideRequest createRideRequest) {
      return validate(createRideRequest)
          .map(request -> Ride.of(request.getName(), request.getRideTime(), request.getCreator()))
          .andThen(ride -> eventLog.store(ride.id(), new RideStorage.RideSaved(ride)));
    }

    @Override
    public Try<List<Ride>> findAllRides() {
      return Try.of(repository::findAll);
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

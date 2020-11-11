package cc.lokalsi.domain.ride;

import io.vavr.control.Try;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.UUID;

import static io.vavr.API.Success;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RideServiceTest {

  @Mock RideBuilder rideBuilder;
  @Mock RideStorage.EventLog rideEventLog;

  @InjectMocks private RideManagement.RideService rideService;

  private final String ANY_NAME = "any-ride-name";
  private final RideTime ANY_RIDE_TIME = RideTime.of(LocalDateTime.of(2020, 10, 15, 15, 0));
  private final Creator ANY_CREATOR = Creator.of(UUID.randomUUID());

  @Test
  public void failsWhenSavingEvent() {
    doThrow(new RuntimeException("cannot store event")).when(rideEventLog).store(any());

    Try<Void> ride =
        rideService.createRide(
            RideManagement.CreateRideRequest.builder()
                .name(ANY_NAME)
                .rideTime(ANY_RIDE_TIME)
                .creator(ANY_CREATOR)
                .build());

    assertThat(ride.isFailure()).isTrue();
    assertThat(ride.getCause())
        .isInstanceOf(RuntimeException.class)
        .hasMessage("cannot store event");
  }

  @Test
  public void buildsRideWithBuilderStoresEven() {
    doReturn(Success(null)).when(rideEventLog).store(any());

    Try<Void> ride =
        rideService.createRide(
            RideManagement.CreateRideRequest.builder()
                .name(ANY_NAME)
                .rideTime(ANY_RIDE_TIME)
                .creator(ANY_CREATOR)
                .build());

    assertThat(ride.isSuccess()).isTrue();

    verify(rideBuilder, times(1)).build(ANY_NAME, ANY_RIDE_TIME, ANY_CREATOR);
    verify(rideEventLog, times(1)).store(any());
  }

  @Test
  public void returnsErrorOnNameValidation() {
    Try<Void> ride =
        rideService.createRide(
            RideManagement.CreateRideRequest.builder()
                .rideTime(ANY_RIDE_TIME)
                .creator(ANY_CREATOR)
                .build());

    assertThat(ride.isFailure()).isTrue();
    assertThat(ride.getCause())
        .isInstanceOf(RideManagement.RideService.CreateRideRequestValidationException.class)
        .hasMessage("Ride name cannot be empty");
  }

  @Test
  public void returnsErrorOnCreatorValidation() {
    Try<Void> ride =
        rideService.createRide(
            RideManagement.CreateRideRequest.builder()
                .name(ANY_NAME)
                .rideTime(ANY_RIDE_TIME)
                .build());

    assertThat(ride.isFailure()).isTrue();
    assertThat(ride.getCause())
        .isInstanceOf(RideManagement.RideService.CreateRideRequestValidationException.class)
        .hasMessage("Ride creator cannot be empty");
  }

  @Test
  public void returnsErrorOnRideTimeValidation() {
    Try<Void> ride =
        rideService.createRide(
            RideManagement.CreateRideRequest.builder().name(ANY_NAME).creator(ANY_CREATOR).build());

    assertThat(ride.isFailure()).isTrue();
    assertThat(ride.getCause())
        .isInstanceOf(RideManagement.RideService.CreateRideRequestValidationException.class)
        .hasMessage("Ride time cannot be empty");
  }
}

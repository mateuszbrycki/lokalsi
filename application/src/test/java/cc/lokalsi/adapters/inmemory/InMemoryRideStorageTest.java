package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.ride.Ride;
import cc.lokalsi.domain.ride.RideStorage;
import io.vavr.collection.List;
import io.vavr.control.Try;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

class InMemoryRideStorageTest {

  private final Ride.RideId ANY_UUID = new Ride.RideId(UUID.randomUUID());
  private final Ride.RideId ANY_UUID_2 = new Ride.RideId(UUID.randomUUID());

  InMemoryRideStorage underTest = new InMemoryRideStorage();

  @Test
  public void shouldStoreEvent() {
    Try<Void> maybeStoredEvent = underTest.store(ANY_UUID, new TestEvent());

    assertThat(maybeStoredEvent.isSuccess()).isTrue();

    assertThat(underTest.getEvents(ANY_UUID).size()).isEqualTo(1);
  }

  @Test
  public void shouldReturnAllSavedRides() {
    underTest.store(ANY_UUID, new RideStorage.RideSaved(Ride.of(ANY_UUID, null, null, null)));
    underTest.store(ANY_UUID_2, new RideStorage.RideSaved(Ride.of(ANY_UUID_2, null, null, null)));

    List<Ride> rides = underTest.findAll();

    assertThat(rides.size()).isEqualTo(2);
    assertThat(rides.map(Ride::id)).containsAll(List.of(ANY_UUID, ANY_UUID_2));
  }

  class TestEvent extends RideStorage.Event {}
}


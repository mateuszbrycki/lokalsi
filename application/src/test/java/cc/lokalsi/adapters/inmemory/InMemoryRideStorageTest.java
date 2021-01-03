package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.ride.Ride;
import cc.lokalsi.domain.ride.RideStorage;
import io.vavr.control.Try;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

class InMemoryRideStorageTest {

  private final Ride.RideId ANY_UUID = new Ride.RideId(UUID.randomUUID());

  InMemoryRideStorage underTest = new InMemoryRideStorage();

  @Test
  public void shouldStoreEvent() {
    Try<Void> maybeStoredEvent = underTest.store(ANY_UUID, new TestEvent());

    assertThat(maybeStoredEvent.isSuccess()).isTrue();

    assertThat(underTest.getEvents(ANY_UUID).size()).isEqualTo(1);
  }
}

class TestEvent extends RideStorage.Event {}

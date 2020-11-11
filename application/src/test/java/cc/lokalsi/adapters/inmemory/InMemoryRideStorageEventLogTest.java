package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.ride.RideStorage;
import io.vavr.control.Try;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class InMemoryRideStorageEventLogTest {

  InMemoryRideStorageEventLog underTest = new InMemoryRideStorageEventLog();

  @Test
  public void shouldStoreEvent() {
    Try<Void> maybeStoredEvent = underTest.store(new TestEvent());

    assertThat(maybeStoredEvent.isSuccess()).isTrue();

    assertThat(underTest.getEvents().size()).isEqualTo(1);
  }
}

class TestEvent extends RideStorage.Event {}

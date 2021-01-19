package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.user.User;
import cc.lokalsi.domain.user.UserStorage;
import io.vavr.control.Try;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

class InMemoryUserStorageTest {

  private final User.UserId ANY_USER_ID = new User.UserId(UUID.randomUUID());

  InMemoryUserStorage underTest = new InMemoryUserStorage();

  @Test
  public void shouldStoreEvent() {
    Try<Void> maybeStoredEvent = underTest.store(ANY_USER_ID, new TestEvent());

    assertThat(maybeStoredEvent.isSuccess()).isTrue();

    assertThat(underTest.getEvents(ANY_USER_ID).size()).isEqualTo(1);
  }

  class TestEvent extends UserStorage.Event {}
}

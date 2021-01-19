package cc.lokalsi.domain.user;

import cc.lokalsi.OutputPort;
import io.vavr.control.Try;
import lombok.Value;

public interface UserStorage {

  interface EventLog extends OutputPort {
    Try<Void> store(User.UserId id, Event event);
  }

  abstract class Event {}

  @Value
  class UserSaved extends Event {
    private final User user;
  }
}

package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.user.User;
import cc.lokalsi.domain.user.UserStorage;
import io.vavr.collection.HashMap;
import io.vavr.collection.List;
import io.vavr.collection.Map;
import io.vavr.control.Try;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class InMemoryUserStorage implements UserStorage.EventLog {

  private Map<User.UserId, List<UserStorage.Event>> events = HashMap.empty();

  @Override
  public Try<Void> store(User.UserId id, UserStorage.Event event) {

    return Try.run(() -> storeEvent(id, event))
        .onSuccess(e -> log.info("Saving event ", event.toString()));
  }

  private void storeEvent(User.UserId userId, UserStorage.Event event) {
    List<UserStorage.Event> rideEvents =
        events.get(userId).map(events -> events.append(event)).getOrElse(List.of(event));
    events = events.put(userId, rideEvents);
  }

  List<UserStorage.Event> getEvents(User.UserId userId) {
    return events.get(userId).getOrElse(List.empty());
  }
}

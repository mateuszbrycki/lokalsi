package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.ride.RideStorage;
import io.vavr.collection.List;
import io.vavr.control.Try;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class InMemoryRideStorageEventLog implements RideStorage.EventLog {

  private List<RideStorage.Event> events = List.of();

  @Override
  public Try<Void> store(RideStorage.Event event) {
    return Try.run(() -> storeEvent(event))
        .onSuccess(e -> log.info("Saving event ", event.toString()));
  }

  private void storeEvent(RideStorage.Event event) {
    events = events.append(event);
  }

  List<RideStorage.Event> getEvents() {
    return events;
  }
}

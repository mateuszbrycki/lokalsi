package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.ride.RideStorage;
import io.vavr.collection.List;
import lombok.extern.java.Log;
import org.springframework.stereotype.Component;

//TODO mbrycki cover with tests
@Component
@Log
public class InMemoryRideStorageEventLog implements RideStorage.EventLog {

  private final List<RideStorage.Event> events = List.empty();

  @Override
  public void store(RideStorage.Event event) {
    log.info("Saving " + event.toString());
    storeEvent(event);
  }

  private void storeEvent(RideStorage.Event event) {
    events.append(event);
  }
}

package cc.lokalsi.adapters.inmemory;

import cc.lokalsi.domain.ride.Ride;
import cc.lokalsi.domain.ride.RideStorage;
import io.vavr.collection.HashMap;
import io.vavr.collection.List;
import io.vavr.collection.Map;
import io.vavr.control.Try;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class InMemoryRideStorage implements RideStorage.EventLog, RideStorage.Repository {

  private Map<Ride.RideId, List<RideStorage.Event>> events = HashMap.empty();

  @Override
  public Try<Void> store(Ride.RideId id, RideStorage.Event event) {
    return Try.run(() -> storeEvent(id, event))
        .onSuccess(e -> log.info("Saving event ", event.toString()));
  }

  private void storeEvent(Ride.RideId rideId, RideStorage.Event event) {
    List<RideStorage.Event> rideEvents =
        events.get(rideId).map(events -> events.append(event)).getOrElse(List.of(event));
    events = events.put(rideId, rideEvents);
  }

  List<RideStorage.Event> getEvents(Ride.RideId rideId) {
    return events.get(rideId).getOrElse(List.empty());
  }

  @Override
  public Ride findById(Ride.RideId id) {
    List<RideStorage.Event> events = getEvents(id);
    return Ride.recreate(events);
  }

  @Override
  public List<Ride> findAll() {
    return events.keySet().map(this::findById).toList();
  }
}

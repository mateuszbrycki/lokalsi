package cc.lokalsi.domain.ride;

import io.vavr.collection.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class RideBuilder {

  private final RideStorage.EventLog eventLog;

  public Ride build(String name, RideTime time, Creator creator) {
    return new Ride(eventLog, name, time, List.empty(), List.empty(), creator);
  }

  Ride build(
      String name,
      RideTime time,
      List<Participant> participants,
      List<Follower> followers,
      Creator creator) {
    return new Ride(eventLog, name, time, participants, followers, creator);
  }
}

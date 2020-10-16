package cc.lokalsi.domain.ride;

import cc.lokalsi.OutputPort;
import lombok.AllArgsConstructor;
import lombok.ToString;
import lombok.Value;

public interface RideStorage {

  interface EventLog extends OutputPort {
    void store(Event event);
  }

  abstract class Event {}

  @Value
  class ParticipantAdded extends Event {
    private final Participant participant;
  }

  @Value
  class ParticipantRemoved extends Event {
    private final Participant participant;
  }

  @Value
  class FollowerAdded extends Event {
    private final Follower follower;
  }

  @Value
  class FollowerRemoved extends Event {
    private final Follower follower;
  }

  @Value
  class RideNameUpdated extends Event {
    private final String name;
    private final String newName;
  }

  @Value
  class RideTimeUpdated extends Event {
    private final RideTime time;
    private final RideTime newTime;
  }

  @Value
  class RideSaved extends Event {
    private final Ride ride;
  }
}

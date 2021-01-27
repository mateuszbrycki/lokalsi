package cc.lokalsi.domain.ride;

import cc.lokalsi.InputPort;
import cc.lokalsi.OutputPort;
import io.vavr.collection.List;
import io.vavr.control.Try;
import lombok.Value;

public interface RideStorage {

  interface EventLog extends OutputPort {
    Try<Void> store(Ride.RideId id, Event event);
  }

  interface Repository extends InputPort {
    Ride findById(Ride.RideId id);
    List<Ride> findAll();
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
  class RideDescriptionUpdated extends Event {
    private final Description description;
    private final Description newDescription;
  }

  @Value
  class RideAdvancementLevelUpdated extends Event {
    private final AdvancementLevel advancementLevel;
    private final AdvancementLevel newAdvancementLevel;
  }

  @Value
  class RideSaved extends Event {
    private final Ride ride;
  }
}

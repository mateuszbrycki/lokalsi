package cc.lokalsi.domain.ride;

import io.vavr.collection.List;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.UUID;

import static io.vavr.API.*;
import static io.vavr.Predicates.instanceOf;

@ToString
@EqualsAndHashCode
public class Ride {

  private RideId id;
  private String name;
  private RideTime time;
  private List<Participant> participants = List.empty();
  private List<Follower> followers = List.empty();
  private Creator creator;

  private List<RideStorage.Event> events = List.empty();

  private Ride(
      String name,
      RideTime time,
      List<Participant> participants,
      List<Follower> followers,
      Creator creator) {
    //TODO mbrycki shouldn't this UUID.randomUUID be extracted to a UUID supplier?
    this(new RideId(UUID.randomUUID()), name, time, participants, followers, creator);
  }

  private Ride(
      RideId rideId,
      String name,
      RideTime time,
      List<Participant> participants,
      List<Follower> followers,
      Creator creator) {
    this.id = rideId;
    this.name = name;
    this.time = time;
    this.participants = participants;
    this.followers = followers;
    this.creator = creator;
  }

  Ride() {}

  private Ride handleRideSaved(RideStorage.RideSaved event) {
    return event.getRide();
  }

  public RideId id() {
    return this.id;
  }

  public String name() {
    return this.name;
  }

  public RideTime rideTime() {
    return this.time;
  }

  public List<Participant> participants() {
    return participants;
  }

  public List<Follower> followers() {
    return followers;
  }

  public void join(Participant participant) {
    handleParticipantAdded(new RideStorage.ParticipantAdded(participant));
  }

  private Ride handleParticipantAdded(RideStorage.ParticipantAdded event) {
    this.participants = participants.append(event.getParticipant());
    this.events = events.append(event);
    return this;
  }

  public void leave(Participant participant) {
    handleParticipantRemoved(new RideStorage.ParticipantRemoved(participant));
  }

  private Ride handleParticipantRemoved(RideStorage.ParticipantRemoved event) {
    this.participants = participants.remove(event.getParticipant());
    this.events = events.append(event);
    return this;
  }

  public void follow(Follower follower) {
    //TODO mbrycki can follow if it is not due
    handleFollowerAdded(new RideStorage.FollowerAdded(follower));
  }

  private Ride handleFollowerAdded(RideStorage.FollowerAdded event) {
    this.followers = followers.append(event.getFollower());
    this.events = events.append(event);
    return this;
  }

  public void unfollow(Follower follower) {
    handleFollowerRemoved(new RideStorage.FollowerRemoved(follower));
  }

  private Ride handleFollowerRemoved(RideStorage.FollowerRemoved event) {
    this.followers = followers.remove(event.getFollower());
    this.events = events.append(event);
    return this;
  }

  public void rename(String newName) {
    handleRideRenamed(new RideStorage.RideNameUpdated(this.name, newName));
  }

  private Ride handleRideRenamed(RideStorage.RideNameUpdated event) {
    name = event.getNewName();
    this.events = events.append(event);
    return this;
  }

  public void reschedule(RideTime newTime) {
    handleRideTimeUpdated(new RideStorage.RideTimeUpdated(this.time, newTime));
  }

  private Ride handleRideTimeUpdated(RideStorage.RideTimeUpdated event) {
    time = event.getNewTime();
    this.events = events.append(event);
    return this;
  }

  public static Ride of(String name, RideTime time, Creator creator) {
    return new Ride(name, time, List.empty(), List.empty(), creator);
  }

  //TODO mbrycki used only in tests
  public static Ride of(RideId rideId, String name, RideTime time, Creator creator) {
    return new Ride(rideId, name, time, List.empty(), List.empty(), creator);
  }

  public static Ride recreate(List<RideStorage.Event> events) {
    return events.foldLeft(new Ride(), Ride::handleEvent);
  }

  private static Ride handleEvent(Ride ride, RideStorage.Event event) {

    return Match(event)
        .of(
            Case($(instanceOf(RideStorage.ParticipantAdded.class)), ride::handleParticipantAdded),
            Case(
                $(instanceOf(RideStorage.ParticipantRemoved.class)),
                ride::handleParticipantRemoved),
            Case($(instanceOf(RideStorage.FollowerAdded.class)), ride::handleFollowerAdded),
            Case($(instanceOf(RideStorage.FollowerRemoved.class)), ride::handleFollowerRemoved),
            Case($(instanceOf(RideStorage.RideNameUpdated.class)), ride::handleRideRenamed),
            Case($(instanceOf(RideStorage.RideSaved.class)), ride::handleRideSaved),
            Case($(instanceOf(RideStorage.RideTimeUpdated.class)), ride::handleRideTimeUpdated),
            Case(
                $(),
                t -> {
                  throw new UnsupportedOperationException("Unsupported event " + t);
                }));
  }

  @AllArgsConstructor
  @EqualsAndHashCode
  public static class RideId {
    private final UUID id;

    @Override
    public String toString() {
      return id.toString();
    }
  }
}

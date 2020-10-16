package cc.lokalsi.domain.ride;

import io.vavr.collection.List;
import lombok.ToString;

@ToString
public class Ride {

  private RideStorage.EventLog eventLog;
  private String name;
  private RideTime time;
  private List<Participant> participants;
  private List<Follower> followers;
  private Creator creator;

  Ride(
      RideStorage.EventLog eventLog,
      String name,
      RideTime time,
      List<Participant> participants,
      List<Follower> followers,
      Creator creator) {
    this.eventLog = eventLog;
    this.name = name;
    this.time = time;
    this.participants = participants;
    this.followers = followers;
    this.creator = creator;
  }

  public void addParticipant(Participant participant) {
    participants.append(participant);
  }

  public void removeParticipant(Participant participant) {
    participants.remove(participant);
  }

  public void addFollower(Follower follower) {
    followers.append(follower);
  }

  public void removeFollower(Follower follower) {
    followers.remove(follower);
  }

  public void rename(String newName) {
    name = newName;
  }

  public void reschedule(RideTime newTime) {
    time = newTime;
  }
}

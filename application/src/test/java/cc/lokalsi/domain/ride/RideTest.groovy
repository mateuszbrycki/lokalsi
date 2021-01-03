package cc.lokalsi.domain.ride

import spock.lang.Specification

import java.time.LocalDateTime;
import io.vavr.collection.List;

class RideTest extends Specification {

    RideTime rideTime = RideTime.of(LocalDateTime.of(2020, 11, 13, 0, 0))
    Ride ride = Ride.of("ride name", rideTime, Creator.of(UUID.randomUUID()));

    def 'can rename ride'() {
        given:
            String newName = "new ride name"
        when:
            ride.rename(newName)
        then:
            ride.name() == newName
    }

    def 'can reschedule ride'() {
        given:
            RideTime newRideTime = RideTime.of(LocalDateTime.of(2020, 11, 14, 0, 0))
        when:
            ride.reschedule(newRideTime)
        then:
            ride.rideTime() == newRideTime
    }

    def 'can follow ride'() {
        given:
            UUID id = UUID.randomUUID()
        when:
            ride.follow(new Follower(id))
        then:
            ride.followers() == List.of(new Follower(id))
    }

    def 'can unfollow ride'() {
        given:
            Follower follower = new Follower(UUID.randomUUID())
        when:
            ride.follow(follower)
        and:
            ride.unfollow(follower)
        then:
            ride.followers() == List.of()
    }

    def 'can join ride'() {
        given:
            UUID id = UUID.randomUUID()
        when:
            ride.join(new Participant(id))
        then:
            ride.participants() == List.of(new Participant(id))
    }

    def 'can leave ride'() {
        given:
            Participant participant = new Participant(UUID.randomUUID())
        when:
            ride.join(participant)
        and:
            ride.leave(participant)
        then:
            ride.participants() == List.of()
    }

    def 'can recreate'() {
        given:
            Participant participant = new Participant(UUID.randomUUID())
        and:
            Participant participant2 = new Participant(UUID.randomUUID())
        and:
            RideStorage.ParticipantAdded participantAdded = new RideStorage.ParticipantAdded(participant)
        and:
            RideStorage.ParticipantAdded participant2Added = new RideStorage.ParticipantAdded(participant2)
        and:
            RideStorage.ParticipantRemoved participant2Removed = new RideStorage.ParticipantRemoved(participant2)
        and:
            Follower follower = new Follower(UUID.randomUUID())
        and:
            Follower follower2 = new Follower(UUID.randomUUID())
        and:
            RideStorage.FollowerAdded followerAdded = new RideStorage.FollowerAdded(follower)
        and:
            RideStorage.FollowerAdded follower2Added = new RideStorage.FollowerAdded(follower2)
        and:
            RideStorage.FollowerRemoved follower2Removed = new RideStorage.FollowerRemoved(follower2)
        and:
            RideStorage.RideNameUpdated rideNameUpdated = new RideStorage.RideNameUpdated("old name","ride name updated")
        and:
            RideStorage.RideTimeUpdated rideTimeUpdated = new RideStorage.RideTimeUpdated(rideTime, RideTime.of(LocalDateTime.of(2020, 11, 14, 0, 0)))
        when:
            Ride recreated = Ride.recreate(List.of(participantAdded, participant2Added, participant2Removed, followerAdded, follower2Added, follower2Removed, rideNameUpdated, rideTimeUpdated))
        then:
            recreated.participants() == List.of(participant)
        and:
            recreated.followers() == List.of(follower)
        and:
            recreated.name() == "ride name updated"
        and:
            recreated.rideTime() == RideTime.of(LocalDateTime.of(2020, 11, 14, 0, 0))
    }
}

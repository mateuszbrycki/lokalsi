package cc.lokalsi.domain.ride;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.UUID;

@ToString
@EqualsAndHashCode
public class Follower {
    private final UUID id;

    public Follower(UUID id) {
        this.id = id;
    }
}

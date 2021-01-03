package cc.lokalsi.domain.ride;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.UUID;

@ToString
@EqualsAndHashCode
public class Participant {
    private final UUID id;

    public Participant(UUID id) {
        this.id = id;
    }
}

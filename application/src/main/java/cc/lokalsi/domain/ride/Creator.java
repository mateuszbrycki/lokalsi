package cc.lokalsi.domain.ride;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.UUID;

@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Creator {

  private final UUID uuid;

  public static Creator of(UUID uuid) {
    return new Creator(uuid);
  }
}

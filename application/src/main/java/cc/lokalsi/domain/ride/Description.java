package cc.lokalsi.domain.ride;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class Description {
  private final String description;

  public static Description of(String description) {
    return new Description(description);
  }
}

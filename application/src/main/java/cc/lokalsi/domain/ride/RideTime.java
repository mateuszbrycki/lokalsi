package cc.lokalsi.domain.ride;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.time.LocalDateTime;

@EqualsAndHashCode
@ToString
public class RideTime {

  private LocalDateTime time;

  public RideTime(LocalDateTime time) {
    this.time = time;
  }

  public LocalDateTime toLocalDateTime() {
    return this.time;
  }

  public static RideTime of(LocalDateTime time) {
    return new RideTime(time);
  }
}

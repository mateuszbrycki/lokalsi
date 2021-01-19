package cc.lokalsi.domain.user;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@EqualsAndHashCode
@ToString
@Getter
public class Password {
  private final String password;

  private Password(String password) {
    this.password = password;
  }

  public static Password of(String password) {
    return new Password(password);
  }
}

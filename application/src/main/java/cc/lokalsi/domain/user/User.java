package cc.lokalsi.domain.user;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.UUID;

@ToString
@EqualsAndHashCode
public class User {

  private final UserId id;
  private final Email email;
  private final Password password;

  public User(UserId userId, Email email, Password password) {
    this.id = userId;
    this.email = email;
    this.password = password;
  }

  public User(Email email, Password password) {
    this(new UserId(UUID.randomUUID()), email, password);
  }

  public UserId id() {
    return this.id;
  }

  public static User of(Email email, Password password) {
    return new User(email, password);
  }

  public static User of(UserId userId, Email email, Password password) {
    return new User(userId, email, password);
  }

  @AllArgsConstructor
  @EqualsAndHashCode
  public static class UserId {
    private final UUID id;

    @Override
    public String toString() {
      return id.toString();
    }
  }
}

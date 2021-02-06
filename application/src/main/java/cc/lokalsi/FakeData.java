package cc.lokalsi;

import cc.lokalsi.command.CreateRideCommand;
import cc.lokalsi.command.RegisterUserCommand;
import cc.lokalsi.cqrs.Gate;
import io.vavr.collection.List;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.UUID;

@Component
@AllArgsConstructor
@Profile("!test")
public class FakeData {

  private final Gate gate;

  @PostConstruct
  public void setupData() {
    List.of(
            RegisterUserCommand.builder()
                .email("admin@admin.com")
                .password("admin")
                .repeatedPassword("admin")
                .build(),
            CreateRideCommand.builder()
                .rideTime(LocalDateTime.now())
                .name("Coffee Ride")
                .creator(UUID.randomUUID())
                .description("Just a regular coffee ride")
                .advancementLevel("FIRST")
                .build(),
            CreateRideCommand.builder()
                .rideTime(LocalDateTime.now())
                .name("OTR")
                .creator(UUID.randomUUID())
                .description("Another OTR Ride")
                .advancementLevel("SECOND")
                .build())
        .forEach(gate::dispatch);
  }
}

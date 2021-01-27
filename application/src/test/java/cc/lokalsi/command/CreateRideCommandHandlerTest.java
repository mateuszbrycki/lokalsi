package cc.lokalsi.command;

import cc.lokalsi.domain.ride.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.UUID;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CreateRideCommandHandlerTest {

  @Mock RideManagement rideManagement;

  @InjectMocks CreateRideCommandHandler handler;

  private static final String ANY_NAME = "any-name";
  private static final String ANY_DESCRIPTION = "any-description";
  private static final String ANY_ADVANCEMENT_LEVEL = AdvancementLevel.FIFTH.name();
  private static final UUID ANY_CREATOR_UUID = UUID.randomUUID();
  private static final LocalDateTime ANY_RIDE_TIME = LocalDateTime.of(2020, 10, 14, 15, 0);

  @Test
  public void verifyThatHandlerTranslatesTheRequestToCommandProperly() {

    CreateRideCommand command =
        CreateRideCommand.builder()
            .name(ANY_NAME)
            .rideTime(ANY_RIDE_TIME)
            .creator(ANY_CREATOR_UUID)
            .description(ANY_DESCRIPTION)
            .advancementLevel(ANY_ADVANCEMENT_LEVEL)
            .build();

    handler.handle(command);

    verify(rideManagement, times(1))
        .createRide(
            RideManagement.CreateRideRequest.builder()
                .creator(Creator.of(ANY_CREATOR_UUID))
                .rideTime(RideTime.of(ANY_RIDE_TIME))
                .name(ANY_NAME)
                .description(Description.of(ANY_DESCRIPTION))
                .advancementLevel(AdvancementLevel.FIFTH)
                .build());
  }
}

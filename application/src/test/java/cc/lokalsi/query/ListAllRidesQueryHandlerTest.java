package cc.lokalsi.query;

import cc.lokalsi.domain.ride.RideManagement;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ListAllRidesQueryHandlerTest {

  @Mock RideManagement rideManagement;

  @InjectMocks ListAllRidesQueryHandler handler;

  @Test
  public void verifyThatHandlerAsksRideManagementForAllRides() {
    handler.handle(new ListAllRidesQuery());

    verify(rideManagement, times(1)).findAllRides();
  }
}

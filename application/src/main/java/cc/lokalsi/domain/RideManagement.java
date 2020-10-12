package cc.lokalsi.domain;

import cc.lokalsi.InputPort;
import io.vavr.control.Try;
import lombok.Builder;
import lombok.Value;

public interface RideManagement extends InputPort {

    Try<Void> createRide(CreateRideRequest createRideRequest);

    @Value
    @Builder
    class CreateRideRequest {
        private String name;
    }
}

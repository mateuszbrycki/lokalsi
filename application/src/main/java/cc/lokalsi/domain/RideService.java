package cc.lokalsi.domain;

import io.vavr.control.Try;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RideService implements RideManagement {

    @Override
    public Try<Void> createRide(CreateRideRequest createRideRequest) {
        log.info("The ride successfully created.");
        return null;
    }
}

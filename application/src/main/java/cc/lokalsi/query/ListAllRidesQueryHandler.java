package cc.lokalsi.query;

import cc.lokalsi.cqrs.QueryHandler;
import cc.lokalsi.domain.ride.Ride;
import cc.lokalsi.domain.ride.RideManagement;
import io.vavr.collection.List;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@AllArgsConstructor
public class ListAllRidesQueryHandler implements QueryHandler<ListAllRidesQuery, List<Ride>> {

    private final RideManagement rideManagement;

    @Override
    public Try<List<Ride>> handle(ListAllRidesQuery query) {
        return rideManagement.findAllRides();
    }
}
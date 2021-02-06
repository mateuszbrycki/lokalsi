package cc.lokalsi.adapters.web;

import cc.lokalsi.command.CreateRideCommand;
import cc.lokalsi.cqrs.Gate;
import cc.lokalsi.domain.ride.Ride;
import cc.lokalsi.query.ListAllRidesQuery;
import io.vavr.control.Try;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@RestController
@AllArgsConstructor
@Slf4j
public class RideWebService {

  private final Gate gate;

  @RequestMapping("/ride")
  @PutMapping
  public ResponseEntity<?> createRide(@RequestBody CreateRideRequest request) {

    Try<Void> dispatch =
        gate.dispatch(
            CreateRideCommand.builder()
                .rideTime(toLocalDateTime(request.getRideTime()))
                .name(request.getName())
                .creator(UUID.randomUUID())
                .description(request.getDescription())
                .advancementLevel(request.getAdvancementLevel())
                .build());

    return toResponseEntity(dispatch);
  }

  @RequestMapping("/rides")
  @GetMapping
  @CrossOrigin(origins = "http://localhost:3000")
  public ResponseEntity<?> listAllRides() {
    var maybeRides =
        gate.<io.vavr.collection.List<Ride>>dispatch(ListAllRidesQuery.builder().build());
    return maybeRides
        .onFailure(err -> log.error("Error", err))
        .map(
            result ->
                ResponseEntity.ok(
                    result
                        .map(
                            ride ->
                                new RideListResponse(
                                    ride.id().toString(),
                                    ride.name(),
                                    ride.rideTime().toLocalDateTime().toString(),
                                    ride.description().toString(),
                                    ride.advancementLevel().toString()))
                        .toJavaList()))
        .getOrElseGet(ex -> new ResponseEntity(ex.getMessage(), HttpStatus.BAD_REQUEST));
  }

  private ResponseEntity<?> toResponseEntity(Try<?> execution) {
    return execution
        .onFailure(err -> log.error("Error", err))
        .map(result -> new ResponseEntity(HttpStatus.CREATED))
        .getOrElseGet(ex -> new ResponseEntity(ex.getMessage(), HttpStatus.BAD_REQUEST));
  }

  private LocalDateTime toLocalDateTime(String rideTime) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    return LocalDateTime.parse(rideTime, formatter);
  }

  @NoArgsConstructor
  @AllArgsConstructor
  @EqualsAndHashCode
  @Getter
  @Setter
  @ToString
  static class CreateRideRequest {
    String name;
    String rideTime;
    String advancementLevel;
    String description;
  }

  @NoArgsConstructor
  @AllArgsConstructor
  @EqualsAndHashCode
  @Getter
  @ToString
  static class RideListResponse {
    String id;
    String name;
    String rideTime;
    String description;
    String advancementLevel;
  }
}

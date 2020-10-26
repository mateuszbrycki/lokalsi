package cc.lokalsi.adapters.web;

import cc.lokalsi.command.CreateRideCommand;
import cc.lokalsi.cqrs.Gate;
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
@RequestMapping("/ride")
@Slf4j
public class RideWebService {

  private final Gate gate;

  @PutMapping
  public ResponseEntity<?> createRide(@RequestBody CreateRideRequest request) {

    Try<Void> dispatch =
        gate.dispatch(
            CreateRideCommand.builder()
                .rideTime(toLocalDateTime(request.getRideTime()))
                .name(request.getName())
                .creator(UUID.randomUUID())
                .build());

    return toResponseEntity(dispatch);
  }

  private ResponseEntity<?> toResponseEntity(Try<?> execution) {
    return execution
        .onFailure(
            err -> log.error("Error", err))
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
  }
}

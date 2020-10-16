package cc.lokalsi.adapters.web;

import cc.lokalsi.command.CreateRideCommand;
import cc.lokalsi.cqrs.Gate;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/ride")
public class RideWebService {

  private final Gate gate;

  @PutMapping
  public ResponseEntity<String> createRide(@RequestBody CreateRideRequest request) {

    Try<Object> dispatch =
        gate.dispatch(
            CreateRideCommand.builder()
                .rideTime(toLocalDateTime(request.getRideTime()))
                .name(request.getName())
                .creator(UUID.randomUUID())
                .build());

    HttpStatus status =
        dispatch.map(result -> HttpStatus.CREATED).getOrElse(HttpStatus.BAD_REQUEST);

    return new ResponseEntity<>(status);
  }

  private LocalDateTime toLocalDateTime(String rideTime) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    return LocalDateTime.parse(rideTime, formatter);
  }

  @Value
  static class CreateRideRequest {
    String name;
    String rideTime;
  }
}

package cc.lokalsi.adapters.web;

import cc.lokalsi.command.CreateRideCommand;
import cc.lokalsi.cqrs.Gate;
import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/ride")
public class RideWebService {

  private final Gate gate;

  @PostMapping
  public ResponseEntity<String> createRide(@RequestBody CreateRideRequest request) {

    Try<Object> dispatch =
        gate.dispatch(CreateRideCommand.builder().name(request.getName()).build());

    HttpStatus status =
        dispatch.map(result -> HttpStatus.CREATED).getOrElse(HttpStatus.BAD_REQUEST);

    return new ResponseEntity<>(status);
  }

  @Value
  static class CreateRideRequest {
    String name;
  }
}

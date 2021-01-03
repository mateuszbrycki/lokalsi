package cc.lokalsi.cqrs;

import io.vavr.control.Try;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

public interface Gate {
  <T> Try<T> dispatch(Command command);

  void dispatchAsync(Command command);

  <T> Try<T> dispatch(Query query);

  void dispatchAsync(Query query);

  @Slf4j
  @AllArgsConstructor
  class NaiveGate implements Gate {

    private final CommandHandlerRegistry commandHandlerRegistry;
    private final QueryHandlerRegistry queryHandlerRegistry;

    @Override
    public <T> Try<T> dispatch(Command command) {
      return commandHandlerRegistry
          .handlerFor(command)
          .flatMap(maybeHandler -> maybeHandler.handle(command));
    }

    @Override
    public void dispatchAsync(Command command) {
      dispatch(command)
          .onFailure(
              exception ->
                  log.error("Error when handling command ", command.toString(), exception));
    }

    @Override
    public <T> Try<T> dispatch(Query query) {
      return queryHandlerRegistry
          .handlerFor(query)
          .flatMap(maybeHandler -> maybeHandler.handle(query));
    }

    @Override
    public void dispatchAsync(Query query) {
      throw new UnsupportedOperationException();
    }
  }
}

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

        private final CommandHandlerRegistry registry;

        @Override
        public <T> Try<T> dispatch(Command command) {
            return Try.of(() -> registry.handlerFor(command))
                    .map(handler -> (T) handler.handle(command));
        }

        @Override
        public void dispatchAsync(Command command) {
            Try.of(() -> registry.handlerFor(command))
                    .map(handler -> handler.handle(command))
                    .onFailure(exception -> log.error("Cannot handle command " + command.toString()));
        }

        @Override
        public <T> Try<T> dispatch(Query query) {
            throw new UnsupportedOperationException();
        }

        @Override
        public void dispatchAsync(Query query) {
            throw new UnsupportedOperationException();
        }
    }

}

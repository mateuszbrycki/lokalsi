package cc.lokalsi.cqrs;

import io.vavr.control.Try;

public interface CommandHandler<R extends Command, T> {
  Try<T> handle(R command);
}

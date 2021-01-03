package cc.lokalsi.cqrs;

import io.vavr.control.Try;

public interface QueryHandler<R extends Query, T> {
    Try<T> handle(R command);
}

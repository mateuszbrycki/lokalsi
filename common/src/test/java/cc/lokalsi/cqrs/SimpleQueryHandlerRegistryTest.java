package cc.lokalsi.cqrs;

import io.vavr.collection.List;
import io.vavr.control.Try;
import org.junit.jupiter.api.Test;

import static io.vavr.API.Success;
import static org.assertj.core.api.Assertions.assertThat;

class SimpleQueryHandlerRegistryTest {

  @Test
  void throwsExceptionWhenNoHandlersRegistered() {

    var simpleQueryHandlerRegistry =
        new QueryHandlerRegistry.SimpleQueryHandlerRegistry(List.empty());

    var QueryHandler = simpleQueryHandlerRegistry.handlerFor(new FakeQuery());
    assertThat(QueryHandler.isFailure()).isTrue();
    assertThat(QueryHandler.getCause())
        .isInstanceOf(QueryHandlerRegistry.CannotFindQueryHandler.class)
        .hasMessage("Cannot find a query handler for " + FakeQuery.class.getName());
  }

  @Test
  void throwsExceptionWhenParticularHandlerIsNotRegistered() {
    var simpleQueryHandlerRegistry =
        new QueryHandlerRegistry.SimpleQueryHandlerRegistry(List.of(new FakeQueryHandler()));

    Try<QueryHandler> QueryHandler =
        simpleQueryHandlerRegistry.handlerFor(new FakeQuery2());
    assertThat(QueryHandler.isFailure()).isTrue();
    assertThat(QueryHandler.getCause())
        .isInstanceOf(QueryHandlerRegistry.CannotFindQueryHandler.class)
        .hasMessage("Cannot find a query handler for " + FakeQuery2.class.getName());
  }

  @Test
  void returnsHandler() {
    FakeQueryHandler fakeQueryHandler = new FakeQueryHandler();
    var simpleQueryHandlerRegistry =
        new QueryHandlerRegistry.SimpleQueryHandlerRegistry(List.of(fakeQueryHandler));

    Try<QueryHandler> QueryHandler = simpleQueryHandlerRegistry.handlerFor(new FakeQuery());
    assertThat(QueryHandler.get()).isEqualTo(fakeQueryHandler);
  }

  class FakeQuery implements Query {}

  class FakeQuery2 implements Query {}

  class FakeQueryHandler implements QueryHandler<FakeQuery, Boolean> {
    @Override
    public Try<Boolean> handle(FakeQuery fakeQuery) {
      return Success(true);
    }
  }
}

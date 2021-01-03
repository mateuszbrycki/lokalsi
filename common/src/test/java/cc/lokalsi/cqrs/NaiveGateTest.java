package cc.lokalsi.cqrs;

import io.vavr.control.Try;
import lombok.EqualsAndHashCode;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static io.vavr.API.Failure;
import static io.vavr.API.Success;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class NaiveGateTest {

  @Mock private CommandHandlerRegistry commandHandlerRegistry;
  @Mock private QueryHandlerRegistry queryHandlerRegistry;

  @InjectMocks private Gate.NaiveGate gate;

  @Nested
  class CommandTest {
    @Test
    public void gateReturnsFailureOnNoHandlerForACommand() {
      when(commandHandlerRegistry.handlerFor(new FakeCommand()))
          .thenReturn(
              Failure(new CommandHandlerRegistry.CannotFindCommandHandler("Cannot find handler")));

      Try<Boolean> dispatch = gate.dispatch(new FakeCommand());

      assertThat(dispatch.isSuccess()).isFalse();
      assertThat(dispatch.getCause())
          .isInstanceOf(CommandHandlerRegistry.CannotFindCommandHandler.class);
    }

    @Test
    public void gatePassesCommandHandlerSuccess() {
      when(commandHandlerRegistry.handlerFor(new FakeCommand()))
          .thenReturn(Success(new FakeCommandSuccessHandler()));

      Try<Boolean> dispatch = gate.dispatch(new FakeCommand());

      assertThat(dispatch.isSuccess()).isTrue();
      assertThat(dispatch.get()).isTrue();
    }

    @Test
    public void gatePassesCommandHandlerFailure() {
      when(commandHandlerRegistry.handlerFor(new FakeCommand2()))
          .thenReturn(Success(new FakeCommand2FailingHandler()));

      Try<Boolean> dispatch = gate.dispatch(new FakeCommand2());

      assertThat(dispatch.isSuccess()).isFalse();
      assertThat(dispatch.getCause())
          .isInstanceOf(RuntimeException.class)
          .hasMessage("command execution failed");
    }

    @EqualsAndHashCode
    class FakeCommand implements Command {}

    @EqualsAndHashCode
    class FakeCommand2 implements Command {}

    class FakeCommandSuccessHandler implements CommandHandler<FakeCommand, Boolean> {
      @Override
      public Try<Boolean> handle(FakeCommand fakeCommand) {
        return Success(true);
      }
    }

    class FakeCommand2FailingHandler implements CommandHandler<FakeCommand2, Boolean> {
      @Override
      public Try<Boolean> handle(FakeCommand2 fakeCommand) {
        return Failure(new RuntimeException("command execution failed"));
      }
    }
  }

  @Nested
  class QueryTest {

    @Test
    public void gateReturnsFailureOnNoHandlerForAQuery() {
      when(queryHandlerRegistry.handlerFor(new FakeQuery()))
          .thenReturn(
              Failure(new QueryHandlerRegistry.CannotFindQueryHandler("Cannot find handler")));

      Try<Boolean> dispatch = gate.dispatch(new FakeQuery());

      assertThat(dispatch.isSuccess()).isFalse();
      assertThat(dispatch.getCause())
          .isInstanceOf(QueryHandlerRegistry.CannotFindQueryHandler.class);
    }

    @Test
    public void gatePassesQueryHandlerSuccess() {
      when(queryHandlerRegistry.handlerFor(new FakeQuery()))
          .thenReturn(Success(new FakeQuerySuccessHandler()));

      Try<Boolean> dispatch = gate.dispatch(new FakeQuery());

      assertThat(dispatch.isSuccess()).isTrue();
      assertThat(dispatch.get()).isTrue();
    }

    @Test
    public void gatePassesQueryHandlerFailure() {
      when(queryHandlerRegistry.handlerFor(new FakeQuery2()))
          .thenReturn(Success(new FakeQuery2FailingHandler()));

      Try<Boolean> dispatch = gate.dispatch(new FakeQuery2());

      assertThat(dispatch.isSuccess()).isFalse();
      assertThat(dispatch.getCause())
          .isInstanceOf(RuntimeException.class)
          .hasMessage("command execution failed");
    }

    @EqualsAndHashCode
    class FakeQuery implements Query {}

    @EqualsAndHashCode
    class FakeQuery2 implements Query {}

    class FakeQuerySuccessHandler implements QueryHandler<FakeQuery, Boolean> {
      @Override
      public Try<Boolean> handle(FakeQuery fakeCommand) {
        return Success(true);
      }
    }

    class FakeQuery2FailingHandler implements QueryHandler<FakeQuery2, Boolean> {
      @Override
      public Try<Boolean> handle(FakeQuery2 fakeCommand) {
        return Failure(new RuntimeException("command execution failed"));
      }
    }
  }
}

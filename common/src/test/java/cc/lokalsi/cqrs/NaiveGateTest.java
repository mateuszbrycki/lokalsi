package cc.lokalsi.cqrs;

import io.vavr.control.Try;
import lombok.EqualsAndHashCode;
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

  @Mock private CommandHandlerRegistry registry;

  @InjectMocks private Gate.NaiveGate gate;

  @Test
  public void gateReturnsFailureOnNoHandlerForACommand() {
    when(registry.handlerFor(new FakeCommand()))
        .thenReturn(
            Failure(new CommandHandlerRegistry.CannotFindCommandHandler("Cannot find handler")));

    Try<Boolean> dispatch = gate.dispatch(new FakeCommand());

    assertThat(dispatch.isSuccess()).isFalse();
    assertThat(dispatch.getCause())
        .isInstanceOf(CommandHandlerRegistry.CannotFindCommandHandler.class);
  }

  @Test
  public void gatePassesCommandHandlerSuccess() {
    when(registry.handlerFor(new FakeCommand()))
        .thenReturn(Success(new FakeCommandSuccessHandler()));

    Try<Boolean> dispatch = gate.dispatch(new FakeCommand());

    assertThat(dispatch.isSuccess()).isTrue();
    assertThat(dispatch.get()).isTrue();
  }

  @Test
  public void gatePassesCommandHandlerFailure() {
    when(registry.handlerFor(new FakeCommand2()))
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

  class FakeCommandSuccessHandler implements CommandHandler<NaiveGateTest.FakeCommand, Boolean> {
    @Override
    public Try<Boolean> handle(NaiveGateTest.FakeCommand fakeCommand) {
      return Success(true);
    }
  }

  class FakeCommand2FailingHandler implements CommandHandler<NaiveGateTest.FakeCommand2, Boolean> {
    @Override
    public Try<Boolean> handle(NaiveGateTest.FakeCommand2 fakeCommand) {
      return Failure(new RuntimeException("command execution failed"));
    }
  }
}

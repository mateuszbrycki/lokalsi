package cc.lokalsi.cqrs;

import io.vavr.collection.List;
import io.vavr.control.Try;
import org.junit.jupiter.api.Test;

import static io.vavr.API.Success;
import static org.assertj.core.api.Assertions.assertThat;

class SimpleCommandHandlerRegistryTest {

  @Test
  void throwsExceptionWhenNoHandlersRegistered() {

    var simpleCommandHandlerRegistry =
        new CommandHandlerRegistry.SimpleCommandHandlerRegistry(List.empty());

    var commandHandler = simpleCommandHandlerRegistry.handlerFor(new FakeCommand());
    assertThat(commandHandler.isFailure()).isTrue();
    assertThat(commandHandler.getCause())
        .isInstanceOf(CommandHandlerRegistry.CannotFindCommandHandler.class)
        .hasMessage("Cannot find a command handler for " + FakeCommand.class.getName());
  }

  @Test
  void throwsExceptionWhenParticularHandlerIsNotRegistered() {
    var simpleCommandHandlerRegistry =
        new CommandHandlerRegistry.SimpleCommandHandlerRegistry(List.of(new FakeCommandHandler()));

    Try<CommandHandler> commandHandler =
        simpleCommandHandlerRegistry.handlerFor(new FakeCommand2());
    assertThat(commandHandler.isFailure()).isTrue();
    assertThat(commandHandler.getCause())
        .isInstanceOf(CommandHandlerRegistry.CannotFindCommandHandler.class)
        .hasMessage("Cannot find a command handler for " + FakeCommand2.class.getName());
  }

  @Test
  void returnsHandler() {
    FakeCommandHandler fakeCommandHandler = new FakeCommandHandler();
    var simpleCommandHandlerRegistry =
        new CommandHandlerRegistry.SimpleCommandHandlerRegistry(List.of(fakeCommandHandler));

    Try<CommandHandler> commandHandler = simpleCommandHandlerRegistry.handlerFor(new FakeCommand());
    assertThat(commandHandler.get()).isEqualTo(fakeCommandHandler);
  }

  class FakeCommand implements Command {}

  class FakeCommand2 implements Command {}

  class FakeCommandHandler implements CommandHandler<FakeCommand, Boolean> {
    @Override
    public Try<Boolean> handle(FakeCommand fakeCommand) {
      return Success(true);
    }
  }
}

package cc.lokalsi.cqrs;

import io.vavr.collection.List;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class CommandHandlerRegistryTest {

  @Test
  void throwsExceptionWhenNoHandlersRegistered() {

    var simpleCommandHandlerRegistry =
        new CommandHandlerRegistry.SimpleCommandHandlerRegistry(List.empty());

    assertThatThrownBy(() -> simpleCommandHandlerRegistry.handlerFor(new FakeCommand()))
        .isInstanceOf(CommandHandlerRegistry.CannotFindCommandHandler.class)
        .hasMessage("Cannot find a command handler for FakeCommand");
  }

  @Test
  void throwsExceptionWhenParticularHandlerIsNotRegistered() {
    var simpleCommandHandlerRegistry =
        new CommandHandlerRegistry.SimpleCommandHandlerRegistry(List.of(new FakeCommandHandler()));

    assertThatThrownBy(() -> simpleCommandHandlerRegistry.handlerFor(new FakeCommand2()))
        .isInstanceOf(CommandHandlerRegistry.CannotFindCommandHandler.class)
        .hasMessage("Cannot find a command handler for FakeCommand2");
  }

  @Test
  void returnsHandler() {
    FakeCommandHandler fakeCommandHandler = new FakeCommandHandler();
    var simpleCommandHandlerRegistry =
        new CommandHandlerRegistry.SimpleCommandHandlerRegistry(List.of(fakeCommandHandler));

    assertThat(simpleCommandHandlerRegistry.handlerFor(new FakeCommand()))
        .isNotNull()
        .isEqualTo(fakeCommandHandler);
  }

  class FakeCommand implements Command {}

  class FakeCommand2 implements Command {}

  class FakeCommandHandler implements CommandHandler<FakeCommand, Boolean> {
    @Override
    public Boolean handle(FakeCommand fakeCommand) {
      return true;
    }
  }
}

package cc.lokalsi.cqrs;

import io.vavr.collection.List;
import io.vavr.collection.Map;
import io.vavr.control.Try;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.function.Function;

public interface CommandHandlerRegistry {

  Try<CommandHandler> handlerFor(Command command);

  Function<Class<?>, String> getClassName = Class::getName;

  class SimpleCommandHandlerRegistry implements CommandHandlerRegistry {

    private final Map<String, CommandHandler> handlers;

    public SimpleCommandHandlerRegistry(List<CommandHandler> handlers) {
      this.handlers =
          handlers.toMap(
              handler -> getClassName.apply(getHandledCommandType(handler.getClass())), Function.identity());
    }

    private Class<?> getHandledCommandType(Class<?> clazz) {
      Type[] genericInterfaces = clazz.getGenericInterfaces();
      ParameterizedType type = findByRawType(genericInterfaces, CommandHandler.class);
      return (Class<?>) type.getActualTypeArguments()[0];
    }

    private ParameterizedType findByRawType(Type[] genericInterfaces, Class<?> expectedRawType) {
      for (Type type : genericInterfaces) {
        if (type instanceof ParameterizedType) {
          ParameterizedType parametrized = (ParameterizedType) type;
          if (expectedRawType.equals(parametrized.getRawType())) {
            return parametrized;
          }
        }
      }
      throw new RuntimeException(); //TODO mbrycki find a better exception
    }

    @Override
    public Try<CommandHandler> handlerFor(Command command) {
      var commandClassName = getClassName.apply(command.getClass());
      return handlers.get(commandClassName)
              .toTry(() -> new CannotFindCommandHandler(commandClassName));
    }
  }

  class CannotFindCommandHandler extends RuntimeException {
    public CannotFindCommandHandler(String className) {
      super("Cannot find a command handler for " + className);
    }
  }
}

package cc.lokalsi.cqrs;

import io.vavr.collection.List;
import io.vavr.collection.Map;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.function.Function;

public interface CommandHandlerRegistry {

    CommandHandler handlerFor(Command command);

    class SimpleCommandHandlerRegistry implements CommandHandlerRegistry {

        private final Map<String, CommandHandler> handlers;

        public SimpleCommandHandlerRegistry(List<CommandHandler> handlers) {
            this.handlers = handlers
                    .toMap(handler -> getHandledCommandType(handler.getClass()).toString(), Function.identity());
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
            throw new RuntimeException(); //TODO find a better exception
        }

        @Override
        public CommandHandler handlerFor(Command command) {
            Class<? extends Command> commandClass = command.getClass();
            return handlers.get(commandClass.toString())
                    .getOrElseThrow(() -> new CannotFindCommandHandler(commandClass.getSimpleName()));

        }

    }

    class CannotFindCommandHandler extends RuntimeException {
        public CannotFindCommandHandler(String className) {
            super("Cannot find a command handler for " + className);
        }
    }

}

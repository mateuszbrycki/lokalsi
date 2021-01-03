package cc.lokalsi.cqrs;

import io.vavr.collection.List;
import io.vavr.collection.Map;
import io.vavr.control.Try;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.function.Function;

public interface QueryHandlerRegistry {

    Try<QueryHandler> handlerFor(Query command);

    Function<Class<?>, String> getClassName = Class::getName;

    class SimpleQueryHandlerRegistry implements QueryHandlerRegistry {

        private final Map<String, QueryHandler> handlers;

        public SimpleQueryHandlerRegistry(List<QueryHandler> handlers) {
            this.handlers =
                    handlers.toMap(
                            handler -> getClassName.apply(getHandledCommandType(handler.getClass())), Function.identity());
        }

        private Class<?> getHandledCommandType(Class<?> clazz) {
            Type[] genericInterfaces = clazz.getGenericInterfaces();
            ParameterizedType type = findByRawType(genericInterfaces, QueryHandler.class);
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
        public Try<QueryHandler> handlerFor(Query query) {
            var commandClassName = getClassName.apply(query.getClass());
            return handlers.get(commandClassName)
                    .toTry(() -> new CannotFindQueryHandler(commandClassName));
        }
    }

    class CannotFindQueryHandler extends RuntimeException {
        public CannotFindQueryHandler(String className) {
            super("Cannot find a query handler for " + className);
        }
    }
}
package cc.lokalsi.config;

import cc.lokalsi.cqrs.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@ComponentScan(basePackages = "cc.lokalsi")
@Configuration
public class HandlersConfig {

  @Bean
  public CommandHandlerRegistry commandHandlerRegistry(
      List<CommandHandler<? extends Command, ?>> handlers) {
    return new CommandHandlerRegistry.SimpleCommandHandlerRegistry(
        io.vavr.collection.List.ofAll(handlers));
  }

  @Bean
  public QueryHandlerRegistry queryHandlerRegistry(
      List<QueryHandler<? extends Query, ?>> handlers) {
    return new QueryHandlerRegistry.SimpleQueryHandlerRegistry(
        io.vavr.collection.List.ofAll(handlers));
  }

  @Bean
  public Gate gate(
      CommandHandlerRegistry commandHandlerRegistry, QueryHandlerRegistry queryHandlerRegistry) {
    return new Gate.NaiveGate(commandHandlerRegistry, queryHandlerRegistry);
  }
}

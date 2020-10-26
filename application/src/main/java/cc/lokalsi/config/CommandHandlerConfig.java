package cc.lokalsi.config;

import cc.lokalsi.cqrs.Command;
import cc.lokalsi.cqrs.CommandHandler;
import cc.lokalsi.cqrs.CommandHandlerRegistry;
import cc.lokalsi.cqrs.Gate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@ComponentScan(basePackages = "cc.lokalsi")
@Configuration
public class CommandHandlerConfig {

  @Bean
  public CommandHandlerRegistry commandHandlerRegistry(List<CommandHandler<? extends Command,?>> handlers) {
    return new CommandHandlerRegistry.SimpleCommandHandlerRegistry(
        io.vavr.collection.List.ofAll(handlers));
  }

  @Bean
  public Gate gate(CommandHandlerRegistry registry) {
    return new Gate.NaiveGate(registry);
  }
}

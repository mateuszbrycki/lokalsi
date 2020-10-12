package cc.lokalsi.cqrs;

public interface CommandHandler<R extends Command, T> {
  T handle(R command);
}

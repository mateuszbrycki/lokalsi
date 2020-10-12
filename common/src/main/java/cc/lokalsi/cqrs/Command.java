package cc.lokalsi.cqrs;

public interface Command {

    enum CommandResult {
        SUCCESS,
        FAILURE
    }
}

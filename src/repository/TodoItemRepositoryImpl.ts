import TodoItemRepository from "../interfaces/TodoItemRepository";
import TodoItem from "../models/TodoItem.model";

class TodoItemRepositoryImpl implements TodoItemRepository {
    save(todo: TodoItem): Promise<TodoItem> {
        throw new Error("Method not implemented.");
    }
    retrieveAll(searchParams: { title: string; active: boolean; }): Promise<TodoItem[] | null> {
        throw new Error("Method not implemented.");
    }
    retrieveById(todoId: number): Promise<TodoItem | null> {
        throw new Error("Method not implemented.");
    }
    retrieveByActiveIndicator(active: boolean): Promise<TodoItem[] | null> {
        throw new Error("Method not implemented.");
    }
    retrieveByDeletedIndicator(deleted: boolean): Promise<TodoItem[] | null> {
        throw new Error("Method not implemented.");
    }
    update(todo: TodoItem): Promise<number> {
        throw new Error("Method not implemented.");
    }
    delete(todoId: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deleteAll(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
}
export default new TodoItemRepositoryImpl();
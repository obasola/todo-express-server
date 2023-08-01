import TodoItem from '../models/TodoItem.model';

interface TodoItemRepository {
    save(todo: TodoItem): Promise<TodoItem>;
    retrieveAll(searchParams: {title: string, active: boolean}): Promise<TodoItem[] | null>;
    retrieveById(todoId: number) : Promise<TodoItem | null>;
    retrieveByActiveIndicator(active: boolean) : Promise<TodoItem[] | null>
    retrieveByDeletedIndicator(deleted: boolean) : Promise<TodoItem[] | null> 
    update(todo: TodoItem) : Promise<number>;
    delete(todoId: number) : Promise<number>;
    deleteAll() : Promise<number>;
}

export default TodoItemRepository;
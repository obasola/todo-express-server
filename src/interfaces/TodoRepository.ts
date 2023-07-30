import Todo from '../models/Todo.model';

interface TodoRepository {
    save(todo: Todo): Promise<Todo>;
    retrieveAll(searchParams: {title: string, active: boolean}): Promise<Todo[] | null>;
    retrieveById(todoId: number) : Promise<Todo | null>;
    update(todo: Todo) : Promise<number>;
    delete(todoId: number) : Promise<number>;
    deleteAll() : Promise<number>;
}

export default TodoRepository;
import { ConditionalExpression } from 'typescript';
import Todo from '..//models/Todo.model';
import TodoRepository from '../interfaces/TodoRepository';
import { Op } from "sequelize"
 
class TodoRepositoryImpl implements TodoRepository {
    async save(todo: Todo): Promise<Todo> {
        try{
            return await Todo.create({
                title: todo.title,
                description: todo.description,
                active: todo.active,
                deleted: todo.deleted,
                date_created: todo.dateCreated
            })
        }catch(err) {
            throw new Error('Todo table insert row Failed: '+err);
        }
        
    }
    async retrieveAll(searchParams: { title: string; active: boolean; deleted: boolean}): Promise<Todo[] | null> {
        try{
            return await Todo.findAll();
        }catch(err) {
            throw new Error('Method not implemented.');
        }
        
    }

    async retrieveByActiveIndicator(active: boolean) {
        try{
            return await Todo.findAll({ where: {active: `${active}`}});
        }catch(err) {
            throw new Error('Method not implemented.');
        }
    }
    retrieveById(todoId: number): Promise<Todo | null> {
        throw new Error('Method not implemented.');
    }

    async retrieveByDeletedIndicator(deleted: boolean) {
        try{
            return await Todo.findAll({ where: {deleted: `${deleted}`}});
        }catch(err) {
            throw new Error('Method not implemented.');
        }
    }
    update(todo: Todo): Promise<number> {
        throw new Error('Method not implemented.');
    }
    async delete(todoId: number): Promise<number> {
        throw new Error('Method not implemented.');
    }
    async deleteAll(): Promise<number> {
        try{
            return await Todo.destroy({
                where: {}, truncate: false
            })
        }catch(err) {
            throw new Error('Method not implemented.');
        }
    }

}

export default new TodoRepositoryImpl();

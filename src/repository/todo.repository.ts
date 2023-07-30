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
    async retrieveById(todoId: number): Promise<Todo | null> {
        try{
            return await Todo.findByPk(todoId)
        }catch(err) {
            console.log("Failed to find row for ID: "+todoId+" "+err);
        }
        return null;
    }

    async retrieveByDeletedIndicator(deleted: boolean) {
        try{
            return await Todo.findAll({ where: {deleted: `${deleted}`}});
        }catch(err) {
            throw new Error('Method not implemented.');
        }
    }
    async update(todo: Todo): Promise<number> {
        try{
            const todoRow = Todo.findByPk(todo.id)
            if(!todoRow) {
                throw new Error("Not found");
            }
            this.handleResult(todo, todoRow )
        }catch(err) {
            console.log("Update failed: "+err);
        }
    }
    async handleResult(todo: Todo, result: { data:Promise<Todo | null> }) {
        let todoRow = result.data;
        todoRow.set({
            title: todo.title,
            description: todo.description,
            active: todo.active,
            deleted: todo.deleted,
            completed: todo.completed
        });
        await todoRow.save();
    }

    async delete(todoId: number): Promise<number> {
        try{
            return await Todo.destroy({
                where: {
                    id: {
                        [Op.eq]: todoId
                    }
                }
            })
        }catch(err) {
            throw new Error('Delete failed for the Id provided:.'+ todoId+' '+err);
        }
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

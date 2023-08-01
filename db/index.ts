import { Sequelize } from 'sequelize-typescript';
import { config, dialect } from '../db/db.config';
import Todo from '../src/models/Todo.model';
import TodoItem from '../src/models/TodoItem.model';
import User from '../src/models/User.model';


class Database{
    public sequelize: Sequelize | undefined;
    

    private async connectToDb() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: dialect,
            models: [Todo, TodoItem, User]
        });

        await this.sequelize
            .authenticate()
            .then( () => {
                console.log("DB connection successfully established ");
            })
            .catch( (err) => {
                console.error("DB connection failed: "+err);
            })
        }
}

export default Database;

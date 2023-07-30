import { Model } from "sequelize-typescript";
import { Table, Column, DataType } from "sequelize-typescript";

@Table ({
    tableName: "User_Todo_List"
})

export default class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        field: "todo_id"
    })
    todoId?: number;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        field: "users_id"
    })
    userId?: number;

}

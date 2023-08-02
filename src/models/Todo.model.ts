import { TINYINT } from "sequelize";
import { Model } from "sequelize-typescript";
import { Table, Column, DataType } from "sequelize-typescript";
import TodoItem from "./TodoItem.model";

@Table({
  tableName: "Todo",
})
export default class Todo extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
    field: "user_id",
  })
  userId?: number;

  @Column({
    type: DataType.STRING,
    field: "title",
  })
  title?: string;

  @Column({
    type: DataType.STRING,
    field: "description",
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "active",
  })
  active?: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: "deleted",
  })
  deleted?: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: "completed",
  })
  completed?: boolean;

  @Column({
    type: DataType.DATE,
    field: "date_created",
  })
  dateCreated?: Date;
}
/*
Todo.hasMany(TodoItem, {
  as: "items",
});
TodoItem.belongsTo(Todo, {
  foreignKey: "todo_id",
});
*/

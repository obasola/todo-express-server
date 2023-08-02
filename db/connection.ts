// @/connection.ts
import { Sequelize } from "sequelize-typescript";

import Todo from "../src/models/Todo.model";
import TodoItem from "../src/models/TodoItem.model";
import User from "../src/models/User.model";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Password2023!",
  database: "MyTasks",
  logging: false,
  models: [Todo, TodoItem, User],
});

export default connection;

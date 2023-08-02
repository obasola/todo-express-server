"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @/connection.ts
const sequelize_typescript_1 = require("sequelize-typescript");
const Todo_model_1 = __importDefault(require("../src/models/Todo.model"));
const TodoItem_model_1 = __importDefault(require("../src/models/TodoItem.model"));
const User_model_1 = __importDefault(require("../src/models/User.model"));
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Password2023!",
    database: "MyTasks",
    logging: false,
    models: [Todo_model_1.default, TodoItem_model_1.default, User_model_1.default],
});
exports.default = connection;

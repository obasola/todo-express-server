"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialect = void 0;
const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Password2023!",
    DB: "MyTasks",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
exports.dialect = "mysql";
exports.default = config;
/*
import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

export default sequelizeConnection
*/

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../../db/db.config"));
const Sequelize = require("sequelize");
const sequelize = new Sequelize(db_config_1.default.DB, db_config_1.default.USER, db_config_1.default.PASSWORD, {
    host: db_config_1.default.HOST,
    dialect: db_config_1.default.DIALECT,
    operatorsAliases: false,
    pool: {
        max: db_config_1.default.pool.max,
        min: db_config_1.default.pool.min,
        acquire: db_config_1.default.pool.acquire,
        idle: db_config_1.default.pool.idle,
    },
});
const db = sequelize.Database;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.todos = require("./Todo.model")(sequelize, Sequelize);
module.exports = db;

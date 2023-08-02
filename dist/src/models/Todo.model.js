"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
let Todo = class Todo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
    }),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        field: "user_id",
    }),
    __metadata("design:type", Number)
], Todo.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "title",
    }),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "description",
    }),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.BOOLEAN,
        field: "active",
    }),
    __metadata("design:type", Boolean)
], Todo.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.BOOLEAN,
        field: "deleted",
    }),
    __metadata("design:type", Boolean)
], Todo.prototype, "deleted", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.BOOLEAN,
        field: "completed",
    }),
    __metadata("design:type", Boolean)
], Todo.prototype, "completed", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.DATE,
        field: "date_created",
    }),
    __metadata("design:type", Date)
], Todo.prototype, "dateCreated", void 0);
Todo = __decorate([
    (0, sequelize_typescript_2.Table)({
        tableName: "Todo",
    })
], Todo);
exports.default = Todo;
/*
Todo.hasMany(TodoItem, {
  as: "items",
});
TodoItem.belongsTo(Todo, {
  foreignKey: "todo_id",
});
*/

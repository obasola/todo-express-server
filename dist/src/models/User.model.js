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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
const Todo_model_1 = __importDefault(require("./Todo.model"));
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "fname"
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "lname"
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "password"
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "email_address"
    }),
    __metadata("design:type", String)
], User.prototype, "emailAddress", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.BOOLEAN,
        field: "active"
    }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.BOOLEAN,
        field: "deleted"
    }),
    __metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
User = __decorate([
    (0, sequelize_typescript_2.Table)({
        tableName: "Users"
    })
], User);
exports.default = User;
User.hasMany(Todo_model_1.default, {
    as: 'todos'
});
Todo_model_1.default.belongsTo(User, {
    foreignKey: 'user_id'
});

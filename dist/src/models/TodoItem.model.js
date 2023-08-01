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
let TodoItem = class TodoItem extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        field: "id"
    }),
    __metadata("design:type", Number)
], TodoItem.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "title"
    }),
    __metadata("design:type", String)
], TodoItem.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: "coupon"
    }),
    __metadata("design:type", String)
], TodoItem.prototype, "coupon", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.DOUBLE,
        field: "discount_amount_or_percent"
    }),
    __metadata("design:type", Number)
], TodoItem.prototype, "discountAmtOrPercent", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        field: "quantity"
    }),
    __metadata("design:type", Number)
], TodoItem.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.DOUBLE,
        field: "item_amount"
    }),
    __metadata("design:type", Number)
], TodoItem.prototype, "itemAmount", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.TINYINT,
        field: "active"
    }),
    __metadata("design:type", Boolean)
], TodoItem.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.TINYINT,
        field: "deleted"
    }),
    __metadata("design:type", Boolean)
], TodoItem.prototype, "deleted", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        field: "todo_id"
    }),
    __metadata("design:type", Number)
], TodoItem.prototype, "todoId", void 0);
TodoItem = __decorate([
    (0, sequelize_typescript_2.Table)({
        tableName: "TodoItem"
    })
], TodoItem);
exports.default = TodoItem;

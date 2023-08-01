"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_model_1 = __importDefault(require("../models/Todo.model"));
const sequelize_1 = require("sequelize");
const SimpleLogger_1 = __importDefault(require("../misc/SimpleLogger"));
class TodoRepositoryImpl {
    constructor() {
        this.logger = SimpleLogger_1.default.initializeLogging();
    }
    save(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.create({
                    title: todo.title,
                    description: todo.description,
                    active: todo.active,
                    deleted: todo.deleted,
                    date_created: todo.dateCreated
                });
            }
            catch (err) {
                this.logger.error('Todo table insert failed with reason: ' + err);
                throw new Error('Todo table insert row Failed: ' + err);
            }
        });
    }
    retrieveAll(searchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.findAll();
            }
            catch (err) {
                throw new Error('Method not implemented.');
            }
        });
    }
    retrieveByActiveIndicator(active) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.findAll({ where: { active: `${active}` } });
            }
            catch (err) {
                throw new Error('Method not implemented.');
            }
        });
    }
    retrieveById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.findByPk(todoId);
            }
            catch (err) {
                console.log("Failed to find row for ID: " + todoId + " " + err);
            }
            return null;
        });
    }
    retrieveByDeletedIndicator(deleted) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.findAll({ where: { deleted: `${deleted}` } });
            }
            catch (err) {
                throw new Error('Method not implemented.');
            }
        });
    }
    update(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoRow = yield Todo_model_1.default.findByPk(todo.id);
                if (!todoRow) {
                    throw new Error("Not found");
                }
                todoRow.title = todo.title,
                    todoRow.description = todo.description,
                    todoRow.active = todo.active,
                    todoRow.deleted = todo.deleted,
                    todoRow.completed = todo.completed;
                todoRow.save();
                return 0;
            }
            catch (err) {
                console.log("Update failed: " + err);
            }
            return 1;
        });
    }
    delete(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.destroy({
                    where: {
                        id: {
                            [sequelize_1.Op.eq]: todoId
                        }
                    }
                });
            }
            catch (err) {
                throw new Error('Delete failed for the Id provided:.' + todoId + ' ' + err);
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_model_1.default.destroy({
                    where: {}, truncate: false
                });
            }
            catch (err) {
                throw new Error('Method not implemented.');
            }
        });
    }
}
exports.default = new TodoRepositoryImpl();

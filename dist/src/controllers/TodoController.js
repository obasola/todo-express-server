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
exports.updateTodo = exports.getTodoById = exports.getAllToDo = exports.deleteToDo = exports.createToDo = void 0;
const Todo_model_1 = __importDefault(require("../models/Todo.model"));
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body.Todo;
    var todo = yield Todo_model_1.default.create(data);
    return res
        .status(200)
        .json({ message: "Todo created successfully", data: todo });
});
exports.createToDo = createToDo;
const deleteToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedTodo = yield Todo_model_1.default.findByPk(id);
    yield Todo_model_1.default.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Todo deleted successfully", data: deletedTodo });
});
exports.deleteToDo = deleteToDo;
const getAllToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTodo = yield Todo_model_1.default.findAll();
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: allTodo });
});
exports.getAllToDo = getAllToDo;
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield Todo_model_1.default.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: todo });
});
exports.getTodoById = getTodoById;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body.Todo;
    yield Todo_model_1.default.update(Object.assign({}, req.body), { where: { id } });
    const updatedTodo = yield Todo_model_1.default.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo updated successfully", data: updatedTodo });
});
exports.updateTodo = updateTodo;

import { RequestHandler } from "express";
import todoRepositoryImpl from "../repository/TodoRepositoryImpl";

import Todo from "../models/Todo.model";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todo = await Todo.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Todo created successfully", data: todo });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: Todo | null = await Todo.findByPk(id);
  await Todo.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allTodo: Todo[] = await Todo.findAll();
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: allTodo });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todo: Todo | null = await Todo.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo fetched successfully", data: todo });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Todo.update({ ...req.body }, { where: { id } });
  const updatedTodo: Todo | null = await Todo.findByPk(id);
  return res
    .status(200)
    .json({ message: "Todo updated successfully", data: updatedTodo });
};
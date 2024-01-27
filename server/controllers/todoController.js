import todoModel from "../models/todoModel.js";

export const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoModel.find();
    return res.status(200).json({ msg: "Success", data: allTodos });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ msg: "Something went wrong", error: error });
  }
};

export const addTodo = async (req, res) => {
  try {
    const { title, desc } = req.body;
    await todoModel.create({ title, desc });
    const allTodos = await todoModel.find();
    return res.status(200).json({ msg: "Success", data: allTodos });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ msg: "Something went wrong", error: error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete(req.params.id);
    const allTodos = await todoModel.find();
    return res.status(200).json({ msg: "Success", data: allTodos });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ msg: "Something went wrong", error: error });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, desc } = req.body;
    await todoModel.findByIdAndDelete(req.params.id, { title, desc });
    const allTodos = await todoModel.find();
    return res.status(200).json({ msg: "Success", data: allTodos });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ msg: "Something went wrong", error: error });
  }
};

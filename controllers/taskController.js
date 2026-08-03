const Task = require("../models/Task");

// GET All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET Task By ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST Add Task
const addTask = async (req, res) => {
    try {

        if (!req.body.title || req.body.title.trim() === "") {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        const task = new Task({
            title: req.body.title.trim(),
            completed: req.body.completed || false,
        });

        const savedTask = await task.save();

        res.status(201).json({
            message: "Task Added Successfully",
            task: savedTask,
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

// PUT Update Task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed,
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task Updated Successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
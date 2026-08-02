const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// GET All Tasks
router.get("/", getAllTasks);

// GET Task By ID
router.get("/:id", getTaskById);

// POST Add Task
router.post("/", addTask);

// PUT Update Task
router.put("/:id", updateTask);

// DELETE Task
router.delete("/:id", deleteTask);

module.exports = router;
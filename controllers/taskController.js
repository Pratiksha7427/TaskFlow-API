// Dummy Data
let tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
  {
    id: 2,
    title: "Build TaskFlow API",
    completed: true,
  },
];

// GET All Tasks
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// GET Task By ID
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json(task);
};

// POST Add Task
const addTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task Added Successfully",
    task: newTask,
  });
};

// PUT Update Task
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.json({
    message: "Task Updated Successfully",
    task,
  });
};

// DELETE Task
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  tasks.splice(index, 1);

  res.json({
    message: "Task Deleted Successfully",
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
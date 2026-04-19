const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// FAKE DATABASE
let tasks = [];

// GET TASKS
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// CREATE TASK
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: req.body.completed || false,
    priority: req.body.priority || 'medium'
  };

  tasks.push(newTask);
  res.json(newTask);
});

// UPDATE TASK
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = req.body.completed;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// DELETE TASK
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ success: true });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
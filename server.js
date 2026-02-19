const express = require("express");
const app = express();
//
const PORT = 3000;

//Tareas Ej
const tasks = [
  {
    id: 1,
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: 2,
    isCompleted: true,
    description: "Do homework",
  },
  {
    id: 3,
    isCompleted: false,
    description: "Buy groceries",
  },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
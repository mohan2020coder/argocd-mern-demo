const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true });

const Todo = mongoose.model('Todo', new mongoose.Schema({
  text: String,
  completed: Boolean
}));

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: false
  });
  await todo.save();
  res.json(todo);
});

app.put('/todos/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(5000, () => console.log('Server running on port 5000'));

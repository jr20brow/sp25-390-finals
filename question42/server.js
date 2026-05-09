const express = require('express');
const app = express();

// Hint: Code to support multipart/form-data goes here

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: "Yello"},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: "Hola"}
];

// Your code goes here.
app.get('/hello', (req, res) => {
  res.type('text').send('Hello from the server!');
});

app.get('/users', (req, res) => {
  res.type('json').send(users);
});

app.post('/users', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'all fields are required' });
  }

  const user = {
    id: nextId,
    name,
    email,
    message
  };

  messages.push(user);
  nextId++;

  res.status(201).json(user);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
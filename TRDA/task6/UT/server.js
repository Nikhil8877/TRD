const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'John' }]);
});

app.post('/users', (req, res) => { 
  // Create user logic  
  res.status(201).json({ user: newUser }); 
});

module.exports = app;
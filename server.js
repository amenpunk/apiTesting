const express = require('express');
const bodyParser = require('body-parser');
const { users, posts } = require('./endpoints');
const { authenticate } = require('./endpoints/middlewares');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersHandlers = users({ axios });
const postHandlers = posts({ axios });

app.get('/', usersHandlers.get)
app.post('/', usersHandlers.post)
app.put('/:id', usersHandlers.put)
app.delete('/:id', usersHandlers.delete)

// app.get('/post', postHandlers.get)
app.post('/post', authenticate, postHandlers.post)
// app.put('/post/:id', postHandlers.put)
// app.delete('/post/:id', postHandlers.delete)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

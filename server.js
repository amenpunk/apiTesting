const express = require('express');
const bodyParser = require('body-parser');
const { users } = require('./endpoints');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersHandlers = users({ axios });

app.get('/', usersHandlers.get)
app.post('/', usersHandlers.post)
app.put('/:id', usersHandlers.put)
app.delete('/:id', usersHandlers.delete)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

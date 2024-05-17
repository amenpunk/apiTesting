import express from 'express';
import { urlencoded, json } from 'body-parser';
import { users } from './endpoints';
import axios from 'axios';

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

const usersHandlers = users({ axios });

app.get('/', usersHandlers.get)
app.post('/', usersHandlers.post)
app.put('/:id', usersHandlers.put)
app.delete('/:id', usersHandlers.delete)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

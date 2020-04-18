const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const { handleError } = require('./app/helpers/api_error');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(jwt({ secret: process.env.SECRET }).unless({ path: ['/token', '/register'] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/users'));

app.use((err, req, res, next) => {
  handleError(err, res);
});

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
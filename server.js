const express = require('express');
const apiRoute = require('./routes/apiRoute');
const notesRoute = require('./routes/notesRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoute);
app.use('/', notesRoute);

app.listen(PORT, () => {
    console.log(` I am running on port http://localhost:${PORT}!`);
  });

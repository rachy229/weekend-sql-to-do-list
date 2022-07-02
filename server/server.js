const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks.router');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Serve "static assets" (html, css, client-side js)
// from the server/public folder
app.use(express.static('server/public'));

// Setup the songs router
// to respond to requests from the `/songs` URL

app.use('/tasks', tasksRouter);


// Start express
const PORT = 5000;
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});

const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const gradesRouter = require('./routes/grades');


const port = 3000;
const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended:true}));
app.use('/', indexRouter);
app.use('/student', studentsRouter);
app.use('/grade', gradesRouter);


app.listen(port, console.log(`Example app listening at http://localhost:${port}`))
module.exports = app;
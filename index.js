const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT=4000;

// Import routers
const courseRouter = require('./course/course.js');
const feesRouter = require("./fees/fees.js");
const studentRouter = require("./student/student.js");

// Use routers with different paths
app.use('/api/courses', courseRouter);
app.use('/api/fees', feesRouter);
app.use('/api/students', studentRouter);

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const organisationRoutes = require('./routes/organisation');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hi');
});
app.use('/auth', authRoutes);
app.use('/organisation', organisationRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

// Custom Middlewares - Error handling
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(err.status).send({ error: err.message });
    return;
  }
  next();
});

module.exports = app;

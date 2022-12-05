const express = require("express");
const {
  isSignedIn
} = require("../controllers/auth/middlewares");
const {
  createTask,
  getTask,
  updateTask,
  reassignTask,
  reTagTask,
  getProjectTasks,
  deleteTask,
} = require("../controllers/task");
const router = express.Router();

router.get("/:user", isSignedIn, isInProj, getTask);

module.exports = router;

const express = require("express");
const {
  isSignedIn,
  isProjLeaderForCreateTask,
  isInProj,
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

router.post("/create", isSignedIn, isProjLeaderForCreateTask, createTask);
router.get("/:taskID", isSignedIn, isInProj, getTask);
router.patch("/:taskID", isSignedIn, isInProj, updateTask);
router.patch("/reassign/:taskID", isSignedIn, isInProj, reassignTask);
router.patch("/reTag/:taskID", isSignedIn, isInProj, reTagTask);

router.get("/all/:projectID", isSignedIn, isInProj, (req, res) => {
  getProjectTasks(req, res, false);
});
router.get("/archived/:projectID", isSignedIn, isInProj, (req, res) => {
  getProjectTasks(req, res, true);
});

router.delete("/:taskID", isSignedIn, isInProj, deleteTask);

module.exports = router;

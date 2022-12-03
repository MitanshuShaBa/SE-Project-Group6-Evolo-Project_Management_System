const express = require("express");
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

router.post("/create", createTask);
router.get("/:taskID", getTask);
router.patch("/:taskID", updateTask);
router.patch("/reassign/:taskID", reassignTask);
router.patch("/reTag/:taskID", reTagTask);

router.get("/all/:projectID", (req, res) => {
  getProjectTasks(req, res, false);
});
router.get("/archived/:projectID", (req, res) => {
  getProjectTasks(req, res, true);
});

router.delete("/:taskID", deleteTask);

module.exports = router;

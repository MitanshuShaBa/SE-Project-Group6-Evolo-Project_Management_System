const express = require("express");
const {
  createProject,
  getProject,
  updateProject,
  addMember,
  removeMember,
  deleteProject,
} = require("../controllers/project");
const router = express.Router();

router.post("/create", createProject);
router.get("/:projectID", getProject);
router.patch("/:projectID", updateProject);
router.patch("/member/add/:projectID/:userID", addMember);
router.patch("/member/remove/:projectID/:userID", removeMember);
router.delete("/:projectID", deleteProject);

module.exports = router;

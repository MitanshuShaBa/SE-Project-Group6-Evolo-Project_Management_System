const User = require("../models/User");
const mongoose = require("mongoose");

exports.getUser = (req, res) => {
    const { user_id } = req.params;
  
    Project.findById(projectID)
      .populate("members", "name email")
      .populate("leader", "name email")
      .populate("organisation", "name")
      .exec((err, project) => {
        if (err) {
          return res.status(400).send({ error: err });
        }
  
        if (!project) {
          return res.status(400).send({ error: "Project not found" });
        }
  
        res.send(project);
      });
  };
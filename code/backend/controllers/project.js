const Project = require("../models/Project");
const Task = require("../models/Task");
const mongoose = require("mongoose");

exports.createProject = (req, res) => {
  const { name, description, startDate, organisation } = req.body;
  const user = req.auth.id;
  const project = new Project({
    ...{
      name,
      description,
      startDate,
      leader: user,
      members: [user],
      organisation,
    },
  });
  project.save((err, project) => {
    if (err) {
      return res.status(400).send({
        error: err,
      });
    }
    res.status(201).send(project);
  });
};

exports.getProject = (req, res) => {
  const { projectID } = req.params;

  Project.findById(projectID)
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

exports.updateProject = (req, res) => {
  const { projectID } = req.params;
  const { name, description, leader, archived } = req.body;

  Project.findByIdAndUpdate(projectID, {
    name,
    description,
    leader,
    archived,
  })
    .exec()
    .then((project) => {
      res.send(project);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.addMember = (req, res) => {
  const { projectID, userID } = req.params;
  console.log(req.params);

  Project.findById(projectID)
    .exec()
    .then((project) => {
      let tmp = project.members.map((arr) => arr.toString());

      tmp.push(userID);

      project.members = tmp;

      project.save((err, project) => {
        if (err) {
          return res.status(400).send({
            error: err,
          });
        }
        res.status(200).send(project);
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.removeMember = (req, res) => {
  const { projectID, userID } = req.params;

  Project.findById(projectID)
    .exec()
    .then((project) => {
      if (project.members.length === 1) {
        return res
          .status(400)
          .send({ error: "Project needs atleast 1 member" });
      }

      if (project.leader.toString() === userID) {
        return res
          .status(400)
          .send({ error: "You cannot remove the leader of the project" });
      }

      let tmp = project.members.map((arr) => arr.toString());

      const idx = tmp.indexOf(userID);
      tmp.splice(idx, 1);

      project.members = tmp;

      project.save((err, project) => {
        if (err) {
          return res.status(400).send({
            error: err,
          });
        }
        res.status(200).send(project);
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.deleteProject = async (req, res) => {
  const { projectID } = req.params;

  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      await Task.deleteMany({ project: projectID }).session(session);

      await Project.findByIdAndDelete(projectID).session(session);
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ error: e });
  }
  session.endSession();

  return res.status(200).send();
};

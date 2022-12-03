const Organisation = require("../models/Organisation");

exports.createOrganisation = (req, res) => {
  const { name, address, phoneNum } = req.body;
  const user = req.auth.id;
  const organisation = new Organisation({
    ...{ name, address, phoneNum, leader: user, members: [user] },
  });
  organisation.save((err, organisation) => {
    if (err) {
      return res.status(400).send({
        error: err,
      });
    }
    res.status(201).send(organisation);
  });
};

exports.getOrganisation = (req, res) => {
  const { organisationID } = req.params;

  Organisation.findById(organisationID)
    .populate("leader", "name email")
    .exec((err, organisation) => {
      if (err) {
        return res.status(400).send({ error: err });
      }

      res.send(organisation);
    });
};

exports.updateOrganisation = (req, res) => {
  const { organisationID } = req.params;
  const { name, address, phoneNum, leader } = req.body;

  console.log(`Updating ${organisationID}...`);

  Organisation.findByIdAndUpdate(organisationID, {
    name,
    address,
    phoneNum,
    leader,
  })
    .exec()
    .then((organisation) => {
      res.send(organisation);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.addMember = (req, res) => {
  const { organisationID, userID } = req.params;

  Organisation.findById(organisationID)
    .exec()
    .then((organisation) => {
      let tmp = organisation.members.map((arr) => arr.toString());

      tmp.push(userID);

      organisation.members = tmp;

      organisation.save((err, organisation) => {
        if (err) {
          return res.status(400).send({
            error: err,
          });
        }
        res.status(200).send(organisation);
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.removeMember = (req, res) => {
  const { organisationID, userID } = req.params;

  Organisation.findById(organisationID)
    .exec()
    .then((organisation) => {
      if (organisation.members.length === 1) {
        return res
          .status(400)
          .send({ error: "Organisation needs atleast 1 member" });
      }

      let tmp = organisation.members.map((arr) => arr.toString());

      const idx = tmp.indexOf(userID);
      tmp.splice(idx, 1);

      organisation.members = tmp;

      organisation.save((err, organisation) => {
        if (err) {
          return res.status(400).send({
            error: err,
          });
        }
        res.status(200).send(organisation);
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

// Delete Organisation - Needs discussion for implementation on how to delete child project and tasks

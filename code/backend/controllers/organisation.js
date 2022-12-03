const Organisation = require("../models/Organisation");

exports.createOrganisation = (req, res) => {
  const { name, address, phoneNum, user } = req.body;
  const organisation = new Organisation({
    ...{ name, address, phoneNum, leader: user },
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

// Delete Organisation - Needs discussion for implementation on how to delete child project and tasks

const express = require("express");
const {
  createOrganisation,
  getOrganisation,
  updateOrganisation,
} = require("../controllers/organisation");
const router = express.Router();

router.post("/create", createOrganisation);
router.get("/:organisationID", getOrganisation);
router.patch("/:organisationID", updateOrganisation);

module.exports = router;

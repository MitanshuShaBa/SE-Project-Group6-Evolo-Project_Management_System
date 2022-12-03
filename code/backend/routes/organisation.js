const express = require("express");
const {
  hasOrgWriteAccess,
  isSignedIn,
} = require("../controllers/auth/middlewares");
const {
  createOrganisation,
  getOrganisation,
  updateOrganisation,
} = require("../controllers/organisation");
const router = express.Router();

router.post("/create", isSignedIn, createOrganisation);
router.get("/:organisationID", getOrganisation);
router.patch(
  "/:organisationID",
  isSignedIn,
  hasOrgWriteAccess,
  updateOrganisation
);

module.exports = router;

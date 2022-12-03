const express = require("express");
const {
  hasOrgWriteAccess,
  isSignedIn,
} = require("../controllers/auth/middlewares");
const {
  createOrganisation,
  getOrganisation,
  updateOrganisation,
  deleteOrganisation,
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
router.delete(
  "/:organisationID",
  isSignedIn,
  hasOrgWriteAccess,
  deleteOrganisation
);

module.exports = router;

const express = require("express");
const router = express.Router();
const dayController = require("../controllers/dayController");

router.get("/", dayController.getDays);
router.get("/:id", dayController.getDay);
router.post("/", dayController.createDay);
router.put("/:id", dayController.updateDay);
router.delete("/:id", dayController.deleteDay);

module.exports = router;
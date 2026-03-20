const router = require("express").Router();
const controller = require("../controllers/parkingController");

router.post("/park", controller.park);
router.post("/exit", controller.exit);

module.exports = router;
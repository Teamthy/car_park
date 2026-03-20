const router = require("express").Router();
const controller = require("../controllers/parkingController");


console.log("Controller methods:", controller);

router.post("/park", controller.park);
router.post("/exit", controller.exit);
router.get("/status", controller.getStatus);


module.exports = router;

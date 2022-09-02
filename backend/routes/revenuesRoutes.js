const router = require("express").Router();
const RevenuesController = require("../controllers/RevenuesController");

router.post("/create", RevenuesController.create);

module.exports = router;

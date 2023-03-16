const router = require("express").Router();
const { products, details } = require("../controllers/productsController");

router.get("/", products).get("/details", details);

module.exports = router;

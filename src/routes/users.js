const router = require("express").Router();
const { login, register, admin } = require("../controllers/usersController");
const access = require("../middlewares/accessAdmin");

router.get("/login", login).post("/login", access, admin);

router.get("/register", register);

module.exports = router;

const express = require("express");
const { userById,allUsers,getUser } = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin , getUser);

//any route containing :userId, our app will first execute userById() method
router.param("userId",userById);

module.exports = router;
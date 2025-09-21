const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/add", userController.addUserData);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;

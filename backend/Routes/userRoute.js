/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const upload = require("../MiddleWares/Multer");

router.post("/", userController.register);

router.get("/", userController.readall);

router.get("/:id", userController.readbyid);

router.get("/name/:username", userController.readbyname);

router.put("/newpassword/:id", userController.changePassword);

router.put("/:id", upload.single("image"), userController.updatebyid);

router.delete("/:id", userController.deletebyid);

module.exports = router;

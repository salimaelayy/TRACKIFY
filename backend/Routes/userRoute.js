/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const upload = require("../MiddleWares/Multer");
const {validateToken} =require('../MiddleWares/ValidateToken')

router.post("/", userController.register);

router.get("/", validateToken, userController.readall);

router.get("/:id", validateToken, userController.readbyid);

router.get("/name/:username", validateToken, userController.readbyname);

router.put("/newpassword/:id", validateToken, userController.changePassword);

router.put("/:id", upload.single("image"), validateToken, userController.updatebyid);

router.delete("/:id", validateToken, userController.deletebyid);

module.exports = router;

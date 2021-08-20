"use strict";

// Route
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// router.get("/", (request, response) => {
//     // response.send();
//     response.render("home/index");
// });


// 이부분이 컨트롤러라고 생각
router.get("/", ctrl.home);
router.get("/login", ctrl.login);
 
module.exports = router;
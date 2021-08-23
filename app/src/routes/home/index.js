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
router.get("/", ctrl.output.home);

//get login
router.get("/login", ctrl.output.login);
//post로 받는부분
router.post("/login", ctrl.process.login); // 로그인 기능을 처리해준다는 의미에서 process라고 이름을 지음

 
module.exports = router;
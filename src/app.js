// 1. * express 없이  http로 서버 띄워보기
// const http = require("http");
// const app = http.createServer((req, res) => {
//     // console.log(req.url); // /경로를 parsing해올 수 있음

//     //이걸해야 한글이 제대로 나옴
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    
//     if(req.url === '/'){
//         res.end("여기는 루트입니다."); //http에서는 express의 send가 없고 end로 해야함.
//     } else if(req.url === "/login"){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버 시작");
// });
//서버가 빙빙돌면 get으로 루트 위치를 지정안해서





// -------- 위의 http 와  아래 express 코드 비교 해보기 -------
// http는 if로 다해야해서 코드가 너무 지저분해짐

// 2. * express로 서버 띄워보기 *

// 모듈
const express = require('express');
const app = express();

// 라우팅 (컨트롤러 이 안에 있음)
const home = require("./routes/home");

// 웹 세팅(views)
app.set("views", "./views");
app.set("view engine", "ejs"); // ejs는 html같은거? // npm install ejs -s

// router받아오기
app.use("/", home);  // use -> 미들 웨어를 등록해주는 메소드. // 이경로에 따라서 해당 콜백함수가 실행되게 되는 원리.


// 서버 가동 따로 bin 폴더에서 최적화 해주기위해
// *주의점! 서버 app.listen을 실행시켜야해서 이제부턴 node ./bin/www.js로 해야함!
module.exports = app;





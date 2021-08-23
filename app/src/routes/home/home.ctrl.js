"use strict";

// const home = (req, res) => {
//     res.render("home/index");
// };

// const login = (req, res) => {
//     res.render("home/login");
// };

// 임시 데이터베이스
const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};



//로그인 화면 출력
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

// 로그인 기능 처리
const process = {
    login: (req, res) => {
        //console.log(req.body);  // 이 body를 볼래면 모듈이 필요: app.js에서 했음
        
        // 인증과정 
        const id = req.body.id,
            psword = req.body.psword;
        // console.log(id, psword); 
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,

                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};



module.exports = {
    // home: home,  // same way 이크마 스크립트6버전에서 추가된기능.
    // login,

    output,
    process,
};


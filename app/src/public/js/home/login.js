"use strict";

// nodemon 장점은 수정후 저장하면 서버가 알아서 꺼졌다가 켜짐(고로 노드몬은 전역으로 sudo npm install nodemon -g 로 설치해야함 )
// console.log("hello");
// console.log("bye");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// console.log(id); // null 이유는 ejs때문. 먼저 실행이되서.. defer를 html에줘야함

loginBtn.addEventListener("click", login);
function login(){
    const req ={
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
};

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
    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    console.log(req); // 오브젝트
    console.log(JSON.stringify(req)); //문자

    // 서버랑 프론트랑 해당 로그인 데이터를 어떤경로에서 주고받을지 정해줘야 함.
    // 어떤 경로로 보낼껀지 + 오브젝트
    fetch("/login", {
        method: "POST", 
        headers:{
            "Content-Type": "application/json" //내가 지금 보내는 데이터가 json형태라는걸 명시해줘야함.
        },
        body: JSON.stringify(req) //문자열로 바꿔서 전달
    })
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            if(res.success){
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
};

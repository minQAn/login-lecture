"use strict";

class UserStorage{
    static #users = {   //앞에 #이 있으면 private 변수
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    //로그인에 필요한건 아이디 비밀번호 뿐이긴 하지만..
    static getUsers(...fields){ // 파라미터 몇개가 올지 모르니까 ...함
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage;
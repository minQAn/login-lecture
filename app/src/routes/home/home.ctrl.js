"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home: home,  // same way 이크마 스크립트6버전에서 추가된기능.
    login,
};


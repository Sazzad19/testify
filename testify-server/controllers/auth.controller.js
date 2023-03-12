const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
let signIn = require("../services/signin")
let signUp = require("../services/signup")
// Retrieve all Tutorials from the database.
exports.signup = (req, res) => {
    signUp(req.body).then(data => {
        res.send(data)
    }).catch(error =>{
        res.status(500).send(error);
    })
}


exports.signin = (req, res) => {
    signIn(req.body.email, req.body.password).then(data=>{
        res.send(data)
    }).catch(error =>{
        res.status(500).send(error);
    })
}
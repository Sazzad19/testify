const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
let signIn = require("../services/signin")

// Retrieve all Tutorials from the database.
exports.signup = (req, res) => {
    User.create(req.body).then(data => {
        res.send({success: true, result: data})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while signup"
          });
    })
}


exports.signin = (req, res) => {
    signIn(req.body.email, req.body.password).then(data=>{
        res.send(data)
    }).catch(error =>{
        res.status(500).send(error);
    })
}
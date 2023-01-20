const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");


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
    User.findOne({where: { email: req.body.email, password: req.body.password}}).then(data => {
        if(data === null){
            res.send({success: false, message: "wrong username or password"})
        }else{
            var token = jwt.sign({
                id: data.id
              }, process.env.API_SECRET);
              data.token = token
            res.send({
                success: true,
                result: data,
                token: token
            }) }
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while signup"
          });
    })
}
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.User;

const verifyToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
      if (err){
        res.status(500)
        .send({
          success: false,
          message: "Invalid token"
        });
      }else{
        User.findByPk(decode.id)
        .then(data => {
          if(data === null){
            res.status(500)
            .send({
              success: false,
              message: "User not found"
            });
          }else{
            req.user = data;
            next();
          }
        }).catch(error =>{
          res.status(500)
          .send({
            success: false,
            message: "Something wrong"
          });
        })
      } 
    });
  } else {
    res.status(500)
            .send({
              success: false,
              message: "Invalid token"
            });
  }
};
module.exports = verifyToken;
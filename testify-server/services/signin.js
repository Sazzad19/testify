const db = require("../models");
// const { sequelize, Sequelize } = require("../models");
// const {User} = require("../models");
const User = db.User;
var jwt = require("jsonwebtoken");

const signIn = async (email, password)=> {
    return new Promise((resolve, reject) =>{
        User.findOne({where: { email: email, password: password}}).then(data => {
            if(data === null){
                reject({success: false, message: "wrong username or password"})
            }else{
                console.log("secret", process.env.API_SECRET)
                var token = jwt.sign({
                    id: data.id
                  }, process.env.API_SECRET);
                  data.token = token
                  resolve({
                    success: true,
                    result: data,
                    token: token
                }) }
        }).catch(error =>{
            reject({
                success: false,
                message:
                error.message || "Some error occurred while signup"
            });
     })        
    })

    // let data = await User.findOne({where: { email: email, password: password}}).then(data => {
    //     if(data === null){
    //        resolve({success: false, message: "wrong username or password"})
    //     }else{
    //         var token = jwt.sign({
    //             id: data.id
    //           }, process.env.API_SECRET);
    //           data.token = token
    //           resolve({
    //             success: true,
    //             result: data,
    //             token: token
    //         }) }
    // }) 

}

module.exports = signIn;

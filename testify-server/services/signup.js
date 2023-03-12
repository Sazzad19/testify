const db = require("../models");
const User = db.User;

const signUp = async (userObject)=> {
    return new Promise((resolve, reject) =>{
        User.create(userObject).then(data => {
            resolve({success: true, result: data})
        }).catch(error =>{
            reject({
                success: false,
                message:
                error.message || "Some error occurred while signup"
              });
        })       
    })

}

module.exports = signUp;

const db = require("../models");
const User = db.User;


exports.update = async (req, res) => {
    User.update({...req.body}, {where: {id: req.params.id}, returning: true}).then(data => {
        res.send({success: true, result: data[1][0]})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while updating data."
          });
    })
}

const db = require("../models");
const Assessment = db.Assessment;
const Question = db.Question;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    Assessment.create({...req.body, questions: req.body.questions}).then(assessment => {
        // const questions = req.body.questions;
        // questions.forEach(async question =>{
        //     await  Question.create(question)
        // })
        res.send(assessment)
    }).catch(error =>{
        res.status(500).send({
            message:
            error.message || "Some error occurred while creating data."
          });
    })
}

exports.findAll = (req, res) => {
    Assessment.findAll().then(data => {
        res.send(data)
    }).catch(error =>{
        res.status(500).send({
            message:
            error.message || "Some error occurred while retrieving data."
          });
    })
}
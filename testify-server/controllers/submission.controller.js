const db = require("../models");
const Submission = db.Submission;
const Question = db.Question;
const Assessment = db.Assessment;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    Assessment.findByPk(req.body.AssessmentId, {include: {model: Question}}).then(assessment =>{
        let totalMarks = 0;
        if(assessment.type == "short"){
            if(assessment.Questions){
                assessment.Questions.forEach(question => {
                    const questionAnswer = req.body.answers.find(answer => answer.questionId == question.id)
                    if(questionAnswer && questionAnswer.answer && question.rightAnswer.toLowerCase() === questionAnswer.answer.trim().toLowerCase()){
                        if(Number(question.mark))
                        totalMarks = totalMarks + Number(question.mark);
                    }
                });
            }
            req.body.justified = true;
        }else if(assessment.type == "broad"){
            if(assessment.Questions){
                assessment.Questions.forEach(question => {
                    const questionAnswer = req.body.answers.find(answer => answer.questionId == question.id)
                    // if(questionAnswer && questionAnswer.answer && question.rightAnswer.toLowerCase() === questionAnswer.answer.trim().toLowerCase()){
                    //     totalMarks = totalMarks + question.mark;
                    // }
                });
            }
        }
        Submission.create({...req.body, obtainedMarks: totalMarks, UserId: req.user.id}).then(submission => {
            res.send({success: true, result: submission})
        }).catch(error =>{
            res.status(500).send({
                success: false,
                message:
                error.message || "Some error occurred while creating data."
              });
        })

    })
}

exports.findAll = (req, res) => {
    const condition = {};
    if(req.params['assessmentId']){
        condition.AssessmentId = req.params['assessmentId']
    }
    Submission.findAll({where: condition}).then(data => {
        res.send({success: true, result: data})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while retrieving data."
          });
    })
}

exports.findOne = (req, res) => {
    const condition = {};
    if(req.params['id']){
        condition.id = req.params['id']
    }
    Submission.findByPk(req.params['id']).then(data => {
        res.send({success: true, result: data})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while retrieving data."
          });
    })
}
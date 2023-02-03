const db = require("../models");
const Assessment = db.Assessment;
const Question = db.Question;
const Submission = db.Submission;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    Assessment.create({...req.body, UserId: req.user.id}).then(assessment => {
        const questions = req.body.questions;
        let totalMarks = 0;
        let questionCount = 0;
        questions.forEach(async question => {
            if(Number(question.mark)){ totalMarks = totalMarks + Number(question.mark)}
            questionCount = questionCount +1;
            await  Question.create({...question, AssessmentId: assessment.id })
        })
        assessment.update({questionCount,totalMarks}).then(()=>{
            res.send({success: true, result: assessment})
        })
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while creating data."
          });
    })
}

exports.findAll = (req, res) => {
    const condition = {};
    if(req.user && req.user.type === 'teacher'){
        condition.UserId = req.user.id;
    }else if(req.user && req.user.type === 'student'){
        condition.class = req.user.class;
    }
    Assessment.findAll({where: condition, include: {model: Submission}}).then(data => {
        data.forEach((assessment, index) => {
            if(assessment.Submissions){
                const userIds =  assessment.Submissions.map(submission => submission.UserId)
                if(userIds.includes(req.user.id)){
                assessment.setDataValue('submittedByUser', true);
                }
            }

        })
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
    condition.id = req.params.id;
    Assessment.findOne({where: condition, include: [{model: Question}]}).then(data => {
        res.send({success: true, result: data})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while retrieving data."
          });
    })
}

exports.update = (req, res) => {
    const condition = {};
    condition.id = req.params.id;
    const input = req.body;
    let totalMarks = 0;
    let questionCount = 0;
    Assessment.update(input, {where: condition, returning: true}).then(assessment => {
        input.questions.forEach(async question => {
            if(Number(question.mark)){ totalMarks = totalMarks + Number(question.mark)}
            questionCount = questionCount +1;
            await  Question.update({...question}, {where: {id: question.id}})
        })

        Assessment.update({questionCount, totalMarks}, {where: condition, returning: true})
        .then((data)=>{
            res.send({success: true, result: data})
        }).catch(error => {
            res.status(500).send({
                success: false,
                message:
                error.message || "Some error occurred while updating data."
              });
        })
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while updating data."
          });
    })
}
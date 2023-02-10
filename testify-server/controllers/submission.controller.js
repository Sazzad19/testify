const db = require("../models");
const Submission = db.Submission;
const Question = db.Question;
const Assessment = db.Assessment;
const User = db.User;
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

exports.findAll = async (req, res) => {
    const condition = {};
    // if(req.params['assessmentId']){
    //     condition.AssessmentId = req.params['assessmentId']
    // }
    if(req.user.type == "student"){
        condition.UserId = req.user.id;
    }else{
        const assessments = await Assessment.findAll({where: {UserId: req.user.id}})
        const assessmentIds = assessments.map(assessment => assessment.id)
        condition.AssessmentId = { [Op.in]: assessmentIds }
    }
    Submission.findAll({where: condition, include: [{model: Assessment, include: {model: Question}},{model: User}], order: [['createdAt', 'DESC']]}).then(data => {
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
    Submission.findByPk(req.params['id'], {include: [{model: Assessment, include: {model: Question}},{model: User}]}).then(data => {
        res.send({success: true, result: data})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while retrieving data."
          });
    })
}


exports.createMark = async (req, res) => {
    const marks = req.body;
    let totalMarks = 0;
    marks.forEach(markObjet => {
        totalMarks = totalMarks + Number(markObjet.mark)
    })
    Submission.findByPk(req.params['id']).then(async submission =>{
        submission.obtainedMarks = totalMarks;
        submission.justified = true;
        await submission.save()
        res.send({success: true, result: submission})
    }).catch(error =>{
        res.status(500).send({
            success: false,
            message:
            error.message || "Some error occurred while retrieving data."
          });
    })
}
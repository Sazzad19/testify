const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware")
const assessmentController = require('../controllers/assessment.controller')
router.get("/list", authMiddleware, assessmentController.findAll);
router.post("/create", authMiddleware, assessmentController.create);

module.exports = router;
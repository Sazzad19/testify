const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware")
const submissionController = require('../controllers/submission.controller')
router.get("/list", authMiddleware, submissionController.findAll);
router.post("/create", authMiddleware, submissionController.create);

module.exports = router;
const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware")
const assessmentController = require('../controllers/assessment.controller')
router.get("/list", authMiddleware, assessmentController.findAll);
router.get("/details/:id", authMiddleware, assessmentController.findOne);
router.post("/create", authMiddleware, assessmentController.create);
router.put("/update/:id", authMiddleware, assessmentController.update);

module.exports = router;
const router = require("express").Router();
const assessmentRouter = require('./assessment.router');
const submissionRouter = require('./submission.route')
const authRouter = require('./auth.router');

router.use('/assessment', assessmentRouter);
router.use('/submission', submissionRouter)
router.use('/', authRouter);

module.exports = router;
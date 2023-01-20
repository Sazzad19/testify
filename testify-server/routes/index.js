const router = require("express").Router();
const assessmentRouter = require('./assessment.router');
const authRouter = require('./auth.router');

router.use('/assessment', assessmentRouter);
router.use('/', authRouter);

module.exports = router;
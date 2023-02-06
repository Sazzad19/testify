const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware")
const authController = require('../controllers/auth.controller')
const profileController = require('../controllers/profile.controller')
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/profile-update/:id",authMiddleware, profileController.update);

module.exports = router;
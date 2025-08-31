const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

router.post('/register', authController.register);
router.get('/activate/:token', authController.activate);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh', authController.refresh);
router.post('/forgotpassword', authController.forgotpassword);
router.post('/resetpassword', authController.resetpassword);

module.exports = router;

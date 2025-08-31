const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authenticate = require('../authMiddleWare');

router.get('/profile', authenticate, userController.getUser);
router.put('/profile/name', authenticate, userController.updateName);
router.put('/profile/email', authenticate, userController.updateEmail);
router.put('/profile/password', authenticate, userController.updatePassword);

module.exports = router;

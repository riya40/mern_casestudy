const express = require('express')
const{loginForm} = require('../components/LoginComponents')
const {RegistrationForm} = require('../components/UserRegistration')
const router = express.Router();

router.post('./loginForm',loginForm)
router.post('./signup',RegistrationForm);

module.exports = router;
const express = require('express');
const router = express.Router();

const {
    getUserInfo,
} = require('../controllers/userController');

router.get('/users/', getUserInfo);

module.exports = router;
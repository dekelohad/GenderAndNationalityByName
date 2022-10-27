const express = require('express');
const router = express.Router();

const {
  getUserCountryAndGenderByName,
} = require('../controllers/userController');

router.get('/users/:userName', getUserCountryAndGenderByName);

module.exports = router;
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const logger = require('../pino-logging/logger');


// @route     GET /api/users/:userName
// @desc      get user Gender and Country by name

const getUserCountryAndGenderByName = async (req, res) => {
  try {
    const userName = req.params.userName;

    const response = await axios.get(`https://api.genderize.io/?name=${userName}`);
    const gender = response.data.gender

    const response2 = await axios.get(`https://api.nationalize.io/?name=${userName}`);
    const country = response2.data.country[0].country_id

    const regionNames = new Intl.DisplayNames(
      ['en'], { type: 'region' }
    );
    const countryName = regionNames.of(country)
    res.status(200).json({
      id: uuidv4(),
      name: userName,
      country: countryName,
      gender: gender,
    });

  } catch (error) {
    logger.error('Error occurred in getUserCountryAndGenderByName ', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getUserCountryAndGenderByName,
};
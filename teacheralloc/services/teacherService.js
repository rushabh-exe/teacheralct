const axios = require('axios');
const config = require('../config/config');
const logger = require('../utils/logger');

exports.getTotalTeachers = async () => {
    try {
        const response = await axios.get(config.teachersUrl);
        return response.data;
    } catch (error) {
        logger.error('Error fetching total teachers:', error);
        throw new Error('Failed to fetch total teachers');
    }
};
const axios = require('axios');
const config = require('../config/config');
const logger = require('../utils/logger');

exports.getAvailableclassrooms = async () => {
    try {
        const response = await axios.get(config.classroomUrl);
        return response.data;
    } catch (error) {
        logger.error('Error fetching available classrooms:', error);
        throw new Error('Failed to fetch available classrooms');
    }
};

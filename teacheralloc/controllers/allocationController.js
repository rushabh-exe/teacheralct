const allocationService = require('../services/allocationService');

exports.getAllotment = async (req, res, next) => {
    try {
        const allotment = await allocationService.getAllotment();
        res.json(allotment);
    } catch (error) {
        next(error);
    }
};

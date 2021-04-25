const models = require('../../models/');
const helper = require('../../services/helper');


exports.register = async (req, res, next) => {
    try {
        const request = req.body;
        const hash = await helper.hashPassword(request.password)
        request.password = hash;
        const userData = await models.user.create(request);
        res.json({ "data" : userData });
    } catch (err) {
        res.status(400).json({ "error": "something went wrong, please try again later" });
    }
};

exports.login = async (req, res, next) => {
    try {
        const request = req.body;
        const userData = await models.user.findOne({
            where: {
                email: request.email
            }, attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'password']
        });
        if (userData) {
            const match = await helper.checkPassword(request.password, userData.password);
            if (match) {
                res.json({ "data" : userData });
            }
        }
        res.status(400).json({ "error": "invalid User" });
    } catch (err) {
        res.status(400).json({ "error": "something went wrong, please try again later" });
    }
};
const Notifications = require('../../models/notifications/Notifications');

module.exports = async function (req, res, next) {
    const { accountId } = req.query;
    Notifications.find({ accountId: accountId }, function (err, data) {
        if (data.length) {
            res.json(data)
        } else {
            res.send({ message: 'not exist' });
        }
    });
};
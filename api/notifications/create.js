const Notifications = require('../../models/notifications/Notifications');

module.exports = async function (req, res, next) {
    const { accountId, name, color } = req.body;
    const notifications = new Notifications({ accountId, name, color });
    await notifications.save();
    return res.send({ message: 'success' });
};
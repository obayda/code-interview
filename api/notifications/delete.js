const Notifications = require('../../models/notifications/Notifications');

module.exports = async function (req, res, next) {
    const { accountId, color } = req.query;
    Notifications.deleteMany({ accountId, color }, function (err, data) {
        if (!data.deletedCount) {
            res.send({ message: "nothing to delete" })
        } else {
            res.send({ message: "success" })
        }
    });
};
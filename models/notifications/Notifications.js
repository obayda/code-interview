const mongoose = require('mongoose');

//1) Add a POST /notifications API that adds a notification to the database: accountId, name and color

const Notifications = new mongoose.Schema({
    accountId: { type: String },
    name: { type: String },
    color: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Notifications', Notifications);

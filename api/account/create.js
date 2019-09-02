const Account = require('../../models/account/Account');

module.exports = async function (req, res, next) {
	const { email, name, age } = req.body;
	Account.find({ email: email }, function (err, data) {
		if (data.length) {
			res.send({ error: "email already exists" })
		} else {
			const account = new Account({ email, name, age });
			account.save();
			res.send({ message: 'success' });
		}
	});
};
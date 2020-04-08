var jwt = require("jsonwebtoken");
const TgsError = require('../services/TgsErrorService');

module.exports = function(req, res, next) {
    var token = req.headers["tgs-token"];
    if (!token) {
        return res.myError(new TgsError(401, 'No Token provided'));
    }
    const jwtSecret = sails.config.TGS.jwtSecret;
	jwt.verify(token, jwtSecret, function(err, data) {
		if (err) {
			sails.log("auth token error", err);
			if (err.name === "TokenExpiredError") {
                return res.myError(new TgsError(401, 'Session expired'));
            } else {
                return res.myError(new TgsError(401, 'Authentification error'));
            }
        }
        req.tokenData = data
        next();
	});
};

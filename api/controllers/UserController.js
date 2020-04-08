const { signupValidation, loginValidation } = require('../services/ValidatorService');

module.exports = {
    getAll: async function(req, res) {
        let users = await User.find({});
        res.status(200).send(users);
    },

    login: function(req, res) {
        console.log("in login");

        //filtering data
        const data = {
            email: req.body.email,
            password: req.body.password,
        };

        // user validation
        const {error} = loginValidation(data);
        if (error) {
            return res.status(400).send(error.message);
        }
        UserService.login(data).then((user) => {
            // adding auth token to header
            let token = sails.helpers.generateToken({id: user.id, email: user.email});
            res.set('tgs-token', token);
            res.sendStatus(200);
        }).catch((error) => {
            res.myError(error);
        });
    },

    signup: function(req, res) {
        console.log("in signup");

        //filtering data
        const data = {
            email: req.body.email,
            password: req.body.password,
        };

        // user validation
        const {error} = signupValidation(data);
        if (error) {
            return res.status(400).send(error.message);
        }

        UserService.create(data).then((user) => {
            // adding auth token to header
            let token = sails.helpers.generateToken({id: user.id, email: user.email});
            res.set('tgs-token', token);
            res.status(200).send(user);
        }).catch((error) => {
            res.myError(error);
        });
    }
};


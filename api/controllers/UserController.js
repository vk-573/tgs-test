const { signupValidation } = require('../services/ValidatorService');


module.exports = {
    getAll: async function(req, res) {
        console.log("get all");
        res.sendStatus(200);
    },

    login: async function(req, res) {
        console.log("in login");
        res.sendStatus(200);
    },

    signup: async function(req, res) {
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
            res.status(200).send(user);
        }).catch((error) => {
            res.myError(error);
        });
    }
};


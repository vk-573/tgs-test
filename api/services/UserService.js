const TgsError = require('./TgsErrorService');

module.exports = {
    create: async function(data) {
        try {
            let usedEmail = await User.findOne({ email: data.email });
            if (usedEmail) {
                throw new TgsError(400, 'email is taken');
            }
            let newUser = await User.create({email: data.email, password: data.password}).fetch();
            return newUser;
        } catch (err) {
            throw (err);
        }
    },

    login: async function(data) {
        try {
            let user = await User.findOne({ email: data.email });
            if (!user) {
                throw new TgsError(400, 'email not found');
            }
            if (user.password !== data.password) {
                throw new TgsError(400, 'invalid password');
            }
            return user;
        } catch (err) {
            throw (err);
        }
    },
};
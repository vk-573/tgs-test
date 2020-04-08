const TgsError = require('./TgsErrorService');

module.exports = {
    create: async function(data) {
        try {
            let usedEmail = await User.findOne({ email: data.email });
            if (usedEmail) {
                throw new TgsError(400, 'Email Taken');
            }
            let newUser = await User.create({email: data.email, password: data.password}).fetch();
            newUser.password = undefined;
            return newUser;
        } catch (err) {
            throw (err);
        }
    },

    login: async function(data) {
        try {
            let user = await User.findOne({ email: data.email });
            if (!user) {
                throw new TgsError(404, 'User Not Found');
            }
            if (user.password !== data.password) {
                throw new TgsError(400, 'Invalid Password');
            }
            return user;
        } catch (err) {
            throw (err);
        }
    },
};
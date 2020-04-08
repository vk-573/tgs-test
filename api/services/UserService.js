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
};
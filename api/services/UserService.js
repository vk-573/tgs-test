module.exports = {
    create: async function(data) {
        try {
            let usedEmail = await User.findOne({ email: data.email });
            if (usedEmail) {
                throw {code: 400, message: 'email is taken'};
            }
            let newUser = await User.create({email: data.email, password: data.password}).fetch();
            return newUser;
        } catch (err) {
            console.log("err:", err);
            if (err.code == 400) {
                throw err;
            }
            throw {code: 500, message: 'Internal Server Error'};

        }
    },
};
const CourseService = require('../services/CourseService');

module.exports = {
    get: function(req, res) {
        console.log("get courses");
        const data = {
            test: req.body.test,
        }
        CourseService.get(data).then((courses) => {
            console.log("in res controller:", courses);
            return res.status(200).send(courses);
        }).catch((error) => {
            console.log("in res catch error:", error);
            // TODO implement error
            return res.sendStatus(500);
        });
    },
};


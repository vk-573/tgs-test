const CourseService = require('../services/CourseService');
const { coursesValidation } = require('../services/ValidatorService');

module.exports = {

    // get courses with body params
    get: function(req, res) {
        console.log("get courses");

        // filtering request data
        const data = {
            startLatitude: req.body.startLatitude,
            startLongitude: req.body.startLongitude,
            endLatitude: req.body.endLatitude,
            endLongitude: req.body.endLongitude,
            startFullAddress: req.body.startFullAddress,
            startZipCode: req.body.startZipCode,
            endFullAddress: req.body.endFullAddress,
            startDate: req.body.startDate,
            filterBy: req.body.filterBy
        }

        // request data validation
        const {error} = coursesValidation(data);
        if (error) {
            return res.status(400).send(error.message);
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

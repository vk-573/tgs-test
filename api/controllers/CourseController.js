const CourseService = require('../services/CourseService');
const { coursesValidation } = require('../services/ValidatorService');

module.exports = {

    // get courses with body params
    get: function(req, res) {

        // filtering data
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

        // data validation
        const {error} = coursesValidation(data);
        if (error) {
            return res.status(400).send(error.message);
        }

        // getting courses
        CourseService.get(data).then((courses) => {
            return res.status(200).send(courses);
        }).catch((error) => {
            return res.myError(error);
        });
    },
};

const Joi = require ("@hapi/joi");

// User
const signupValidation = data => {
    const userCreation = Joi.object({
        email:              Joi.string().required().min(4).max(128).email().lowercase(),
        password:               Joi.string().required().min(9).max(128),
    });
    return userCreation.validate(data);
}
const loginValidation = data => {
    const userLogin = Joi.object({
        email:              Joi.string().min(4).max(128).email().lowercase().required(),
        password:           Joi.string().required().max(128),
    });
    return userLogin.validate(data);
}

// Courses
const coursesValidation = data => {
    const course = Joi.object({
        startLatitude:      Joi.number().required(),
        startLongitude:     Joi.number().required(),
        endLatitude:        Joi.number().required(),
        endLongitude:       Joi.number().required(),
        startFullAddress:   Joi.string().allow('').optional().max(300),
        startZipCode:       Joi.string().allow('').optional().max(32),
        endFullAddress:     Joi.string().allow('').optional().max(300),
        startDate:          Joi.string().allow('').optional().max(56),
        filterBy:           Joi.string().allow('').optional().max(56),
    });
    return course.validate(data);
}

module.exports = {
    // User
    signupValidation,
    loginValidation,
    // Courses
    coursesValidation,
};
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  // VIEWS
  '/': { view: 'pages/homepage' },

  // API ROUTES

  // courses
 'POST   /api/course':             { action: 'course/get' },

  // users
 'GET   /api/user':               { action: 'user/getAll' },
 'POST   /api/user/signup':       { action: 'user/signup' },
 'POST   /api/user/login':        { action: 'user/login' },

 // TODO serve all
};

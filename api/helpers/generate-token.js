var jwt = require("jsonwebtoken");

module.exports = {


  friendlyName: 'Generate Auth Token',


  description: 'Generating an auth token after login or sign up',


  inputs: {
    data: {
      type: 'ref',
      required: true,
      description: 'object with user data'
    }
  },

  sync: true,

  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: function (inputs, exits) {
    const data = {
      id: inputs.data.id,
      email: inputs.data.email
    };
    const secretJWT = sails.config.TGS.jwtSecret;
    const token = jwt.sign(data, secretJWT, { expiresIn: '3d'});
    return exits.success(token);
  }
};


module.exports = {

  friendlyName: 'sort-courses',

  description: 'sort the courses list by arrival time or price',

  inputs: {
    courses:{
      type: 'ref',
      description: 'list of courses',
      required: true
    },
    filter:{
      type: 'string',
      example: 'time',
      description: 'attribute filter',
      required: true
    },
  },

  sync: true,

  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: function (inputs, exits) {
    if (inputs.filter == "price") {
      inputs.courses.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
    else if (inputs.filter == "time") {
      inputs.courses.sort((a, b) => (a.arrivalTime > b.arrivalTime) ? 1 : -1);
    }
    return exits.success(inputs.courses);
  }


};


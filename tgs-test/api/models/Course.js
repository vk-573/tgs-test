/**
 * Course.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    offerId: 'string',      //"d4ea95ca-0133-4681-8be1-c1f1e2d00cfc",
    providerCode: 'string', //"mysam",
    category: 'string',     //"VAN",
    price: 'number',        //60,
    currency: 'string'      //"€"
  },

};


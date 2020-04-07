/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function(req, res) {
        console.log("get all");
        res.sendStatus(200);
    },

    login: async function(req, res) {
        console.log("in login");
        res.sendStatus(200);
    },

    signup: async function(req, res) {
        console.log("in signup");
        res.sendStatus(200);
    }
};


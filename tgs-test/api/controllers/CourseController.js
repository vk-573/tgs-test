/**
 * CourseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function(req, res) {
        console.log("hohho");
        res.send(200).json("okat");
    }
};


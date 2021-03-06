const axios = require("axios");
const TgsError = require('../services/TgsErrorService');

const TGS_apiKey = sails.config.TGS.apiKey;
const TGS_url = sails.config.TGS.url;

module.exports = {
    get: async function(data) {
        try {
            options = {headers: {
                'Content-Type': 'application/json',
                'x-api-key': TGS_apiKey,
            }};
            body = {
                "startLatitude": data.startLatitude,
                "startLongitude": data.startLongitude,
                "endLatitude": data.endLatitude,
                "endLongitude": data.endLongitude,
                "startFullAddress": encodeURI(data.startFullAddress),
                "startZipCode": data.startZipCode,
                "endFullAddress": encodeURI(data.endFullAddress),
                "startDate": data.startDate,
            };
            let response = await axios.post(TGS_url + 'getalloffers', body, options);
            // on success
            if (response.data.statusCode == 200) {
                let final = response.data.body;
                if (data.filterBy) {
                    sails.helpers.coursesSort(final, data.filterBy);
                }
                return final;
            }
            else {
                throw new TgsError(500, 'Error Getting Offers');
            }
        } catch (err) {
            throw err;
        }
    },
};
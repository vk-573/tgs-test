const axios = require("axios");

const TGS_apiKey = sails.config.TGS.apiKey;
const TGS_url = sails.config.TGS.url;

module.exports = {
    get: async function(data) {
        try {
            console.log("in course Service get");
            options = {headers: {
                'Content-Type': 'application/json',
                'x-api-key': TGS_apiKey,
            }};
            body = {
                "startLatitude": 48.870377,
                "startLongitude": 2.370615,
                "endLatitude": 48.882719,
                "endLongitude": 2.322451,
                "startFullAddress": "141%20avenue%20parmentier%2C%20Paris%2C%2075010%2C%20France",
                "startZipCode": "75012",
                "endFullAddress": "141%20avenue%20parmentier%2C%20Paris%2C%2075010%2C%20France",
                "startDate": "2020-04-08T12:48:21.000Z"
            };
            console.log("just before request");
            let response = await axios.post(TGS_url + 'getalloffers', body, options);
            return response.data;
        } catch (err) {
            console.log("err:", err);
            throw err;
        }
    },
};
require("dotenv").config();

const axios = require("axios");
const zipCodeURL = "https://www.zipcodeapi.com/rest/";

const apiKey = process.env.ZIPCODE_API_KEY;

module.exports = {
  getDistance: async (req, res, next) => {
    try {
      const response = await axios.get(
        zipCodeURL +
          apiKey +
          "/distance.json/" +
          req.params.zipCode1 +
          "/" +
          req.params.zipCode2 +
          "/mile"
      );
      res.send(response.data);
    } catch (error) {
      res.send({ message: "An error occured.", distance: -1 });
    }
  },
};

const controller = require("./controller");

module.exports = (app) => {
  app.route("/distance/:zipCode1/:zipCode2").get(controller.getDistance);
};

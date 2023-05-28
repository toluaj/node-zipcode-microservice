const distance = require("../service/distance");

module.exports = {
  getDistance: (req, res) => {
    distance.getDistance(req, res, (err, dist) => {
      if (err) res.send(err);
      res.send(dist);
    });
  },
};

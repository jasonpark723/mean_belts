const mongoose = require("mongoose");
const Restaurant = mongoose.model("Restaurant");
const { flattenErrorsToArr } = require("../../helper");
module.exports = {
  create(req, res) {
    Restaurant.findByIdAndUpdate(
      req.params.restId,
      { $addToSet: { reviews: req.body } },
      { new: true, runValidators: true },
      (err, restaurant) => {
        if (err) {
          return res.json({ errors: flattenErrorsToArr(err) });
        }
        res.json({ restaurant });
      }
    );
  }
};

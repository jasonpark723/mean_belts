const mongoose = require("mongoose");

const Restaurant = mongoose.model("Restaurant");

const { flattenErrorsToArr } = require("../../helper");

module.exports = {
  all(req, res) {
    Restaurant.find()
      .then(restaurants =>
        res.json({
          restaurants: restaurants
        })
      )
      .catch(err => {
        res.json({ errors: err });
      });
    // shorthand: return an obj with a key called error
    // the val of the key will be the val of the param
    // this shorthand works because param and key same name
    // .catch(error => res.json({ error }));
  },
  create(req, res) {
    Restaurant.create(req.body)
      .then(newRestaurant => {
        res.json({ restaurants: newRestaurant });
      })
      .catch(err => {
        res.json({ errors: flattenErrorsToArr(err) });
      });
  },
  update(req, res) {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // will return the new updated obj rather than
      // the object before the update
      new: true
    })
      .then(restaurant => {
        res.json({ restaurant: restaurant });
      })
      .catch(err => {
        res.json({ errors: flattenErrorsToArr(err) });
      });
  },
  getOne(req, res) {
    Restaurant.findById(req.params.id)
      .then(restaurant => {
        res.json({ restaurant: restaurant });
      })
      .catch(err => {
        res.json({ errors: err });
      });
  },
  delete(req, res) {
    Restaurant.findByIdAndDelete(req.params.id)
      .then(restaurant => {
        res.json({ restaurant: restaurant });
      })
      .catch(err => {
        res.json({ errors: err });
      });
  }
};

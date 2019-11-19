const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least 3 characters long"]
    },
    cuisine: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least 3 characters long"]
    },
    reviews: [
      new mongoose.Schema(
        {
          name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least 3 characters long"]
          },
          rating: {
            type: Number,
            required: [true, "{PATH} is required"],
            min: [1, "{PATH} must be between 1 and 5"],
            max: [5, "{PATH} must be between 1 and 5"]
          },
          comment: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least 3 characters long"]
          }
        },
        { timestamps: true }
      )
    ]
  },
  { timestamps: true }
);

mongoose.model("Restaurant", RestaurantSchema);

//change Item

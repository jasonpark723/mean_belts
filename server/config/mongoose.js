const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restaurants", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

require("../models/restaurant");

//change item and dbName

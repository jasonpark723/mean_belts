const restaurantsController = require("../controllers/restaurants");
const reviewsController = require("../controllers/reviews");

module.exports = function(app) {
  app.get("/api/restaurants", restaurantsController.all);
  app.post("/api/restaurants", restaurantsController.create);
  app.put("/api/restaurants/:id", restaurantsController.update);
  app.get("/api/restaurants/:id", restaurantsController.getOne);
  app.delete("/api/restaurants/:id", restaurantsController.delete);

  app.post("/api/restaurants/:restId/review", reviewsController.create);
};

//change restaurants

'use strict';
module.exports = function(app) {
  const fishFinder = require('../controllers/fishFinderController');

  //  fishFinder Routes
  app.route('/fishingspot')
    .get(fishFinder.list_all_fishingspots)
    .post(fishFinder.create_a_fishingspot);

  app.route('/fishingspot/:fishingspotId')
    .get(fishFinder.read_a_fishingspot)
    .put(fishFinder.update_a_fishingspot)
    .delete(fishFinder.delete_a_fishingspot)
};

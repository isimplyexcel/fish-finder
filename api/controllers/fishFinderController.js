'use strict';

const mongoose = require('mongoose'),
  FishingSpot = mongoose.model('FishingSpots');

exports.list_all_fishingspots = function(req, res) {
  FishingSpot.find({}, function(err, fishingspot){
    if(err){
      res.send(err);
    }
    console.log("called /fishingspot with get request");
    res.json(fishingspot);
  });
};

exports.create_a_fishingspot = function(req, res){
  let new_fishingspot = new FishingSpot(req.body);
  new_fishingspot.save(function(err, fishingspot){
    if(err){
      res.send(err)
    }
    res.json(fishingspot);
  });
};

exports.read_a_fishingspot = function(req, res){
  FishingSpot.findById(req.params.fishingspotId, function(err, fishingspot){
    if(err){
      res.send(err)
    }
    res.json(fishingspot);
  });
};

exports.update_a_fishingspot = function(req, res){
  FishingSpot.findOneAndUpdate({_id: req.params.fishingspotId}, req.body, {new: true}, function(err, fishingspot){
    if(err){
      res.send(err)
    }
    res.json(fishingspot);
  });
};

exports.delete_a_fishingspot = function(req, res){
  FishingSpot.remove({_id: req.params.fishingspotId}, function(err, fishingspot){
    if(err){
      res.send(err)
    }
    res.json(fishingspot);
  });
};

const express = require('express'),
      app = express(),
      port = process.env.PORT || 3002,
      mongoose = require('mongoose'),
      FishingSpot = require('./api/models/fishFinderModel'),
      bodyParser = require('body-parser'),
      cors = require('cors');

//  mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FishFinderdb', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./api/routes/fishFinderRoutes');
routes(app);

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is running on: " + port);
});

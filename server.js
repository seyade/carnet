'use strict';

let express = require('express'),
  mongoose = require('mongoose'),
  Carnet = require('./models/carnet'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3009,
  router = express.Router();

mongoose.connect('mongodb://localhost:27017/carnet', function (err) {
  if (err) {
    console.log(err);
  }
});

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open');
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(function (req, res, next) {
  console.log('Something is happening, do not worry!');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get('/', function (req, res) {
    Carnet.find(function (err, carnets) {
      if (err) {
        res.send(err);
      } else {
        return res.json(carnets);
      }
    });
  });

router.get('/carnets', function (req, res) {
  Carnet.find(function (err, carnets) {
    if (err) {
      res.send(err);
    } else {
      return res.json(carnets);
    }
  });
});

router.get('/carnets/:carnet_id', function (req, res) {
  Carnet.findById(req.params.carnet_id, function (err, carnet) {
    if (err) {
      res.send(err);
    } else {
      return res.json(carnet);
    }
  });
});

router.post('/carnets', function (req, res) {
  let carnet = new Carnet();

  carnet.bookmarkTitle = req.body.bookmarkTitle;
  carnet.url = req.body.url;
  carnet.info = req.body.info;
  carnet.createdAt = req.body.createdAt;

  if (req.body.updatedAt !== req.body.createdAt) {
    carnet.updatedAt = req.body.updatedAt;
  }

  carnet.save(function (err) {
    if (err) {
      res.send(err);
    } else {
      return res.json({ message: 'A Carnet bookmark is saved!' });
    }
  });
});

router.put('/carnets/:carnet_id', function (req, res) {
  Carnet.findById(req.params.carnet_id, function (err, carnet) {

    carnet.bookmarkTitle = req.body.bookmarkTitle;
    carnet.url = req.body.url;
    carnet.info = req.body.info;
    carnet.updatedAt = req.body.updatedAt;

    carnet.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        return res.json({ message: 'The Carnet bookmark is updated!' });
      }
    });
  });
});

router.delete('/carnets/:carnet_id', function (req, res) {
  Carnet.remove({ _id: req.params.carnet_id }, function (err, carnet) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'carnet removed successfully!' });
    }
  });
});

app.use('/api', router);

app.listen(port);
console.log('Carnet app has started on port ', port);

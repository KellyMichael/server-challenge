var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.lattlong);
  const response = res;
  request("http://www.metaweather.com/api/location/search/?lattlong=" + req.query.lattlong, function(err, tres, body){
    var body = JSON.parse(tres.body);
    var first = body[0].distance;
    var second = body[1].distance;
    response.send((second - first) + '');
  });
});

module.exports = router;

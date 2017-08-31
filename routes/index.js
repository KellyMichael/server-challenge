var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.lattlong);
  if(!req.query.lattlong){
    response.send('ERROR, missing query \'lattlong\'')
  }
  const response = res;
  request("http://www.metaweather.com/api/location/search/?lattlong=" + req.query.lattlong, function(err, tres, body){
    try{
      var body = JSON.parse(tres.body);
    }catch(e){
      res.send('ERROR, invalid query');
      return
    }
    var first = body[0].distance;
    var second = body[1].distance;
    if(!first || !second){
      response.send('ERROR, invalid query');
    }
    response.send((second - first) + '');
  });
});

module.exports = router;

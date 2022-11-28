var express = require('express');
var router = express.Router();
const user_routes = require('./users.routes')


router.use('/user', user_routes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "haha": "fuck"
  })
});

module.exports = router;

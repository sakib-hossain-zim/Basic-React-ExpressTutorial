var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  //Inserting some data to check

  res.json([{
    traveller_id: 075,
    username: "sakib_hossain"
  },
  {
    traveller_id: 0100,
    username: "hossain"

  }
]);
});

module.exports = router;

var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var sqlquery = 'SELECT * FROM event' ;
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Topoftheworld10!',
  port: 3308,
  database: 'travelplanmysqlserverdatabase'
});

connection.connect(err => {
  if(err){
    return err;  }
});

console.log(connection);

router.get('/event/view',(req,res) => {
  connection.query(sqlquery,(err,results) => {
    if(err){
      return res.send(err);
      console.log(err)
    } else {
      return res.json({
        data: results
    })
    }

  });
});


router.post('/event/new', function(req, res, next) {
    var postData = req.body;
    connection.query('INSERT INTO event SET ?',postData, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});



module.exports = router;

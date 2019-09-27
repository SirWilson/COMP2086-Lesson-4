var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Task Manager'});
});

router.get('/about', (req, res, next) =>{
  res.render('about', {message: 'Hello World'});
});

module.exports = router;
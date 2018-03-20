var express = require('express'),
	multer = require('multer'),
	router = express.Router(),
	randomController = require('../controllers/random');



router.get('/', function(req, res) {
	res.render('index', {
		page : 'home',
		randomName:'',
		title: 'Are you the lucky one ?',
		errors: []
	});
});


router.get('/getRandomName',randomController.getRandomName);
module.exports = router;

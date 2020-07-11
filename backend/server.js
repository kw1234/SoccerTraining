var express = require('express');
var app = express();
var colorService = require('./routes/colorService.js');
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var router = express.Router();

/*router.get('/', function(req, res, next) {
	res.send("momo");
    });

    app.use('/', router);*/
//app.use(express.static('frontend'));

app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

app.get('/', function(req, res) {
        res.send("hello");
    });

// establishing routes below
var api = express.Router();

api.post('/postColors', colorService.postColors);

//api.post('/highlight/:word', urlService.highlight);

app.use('/api', api);

app.listen(8080);
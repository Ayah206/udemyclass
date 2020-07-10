var express = require('express');
var ejs = require('ejs');
var app = express();

var port = process.env.PORT || 8000;

var clientquotes =  [
    {
        word : "you are smart enough"
    },
    {
        word: "you are strong enough"
    },
    {
        word: "you are just enough"
    },
]

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.render('index', {userquote : clientquotes});
});

app.listen(port)


//http
var http = require('http');
var fs = require('fs');
var colors = require('colors');
var oneLinerJoke = require('one-liner-joke');

console.log('Starting server...'.zebra);
var getRandomJoke = oneLinerJoke.getRandomJoke();

var server = http.createServer(function(req, res){

	fs.readFile('text.txt', 'utf-8', function(err, data) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write(data);
        res.write('<br /> <br />' + getRandomJoke.body);
        res.end();
    });
})


//server.listen(3003);
server.listen(process.env.PORT || 3003);
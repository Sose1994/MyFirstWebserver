//http
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

	fs.readFile('medium.txt', 'utf-8', function(err, data) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write(data);
        res.end();
    });
})

//server.listen(3003);
server.listen(process.env.PORT || 3003);
//http
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write('{title" : "Hello JSON web API", "text" : "Text fra min API"');
    res.end();
});

//server.listen(3003);
server.listen(process.env.PORT || 3003);
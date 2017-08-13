var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html"); /*wykasowałem ; charset=utf-8 z premedytacją
     patrząc na dokumentacje*/
    if (request.method === 'GET' && request.url === '/index') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });
    } else {
        // response.statusCode = 404;
        fs.readFile('./cat.jpeg', function(err, data) {
            response.writeHead(404, {'Content-Type' : 'image/jpg'});/*jak dam kod 200 zamiast 404 i odznacze
            response.statusCode = 404; to obrazek nie zwraca błędu 404 co tu jest źle??*/
            response.write(data);
            response.end();
        });
    }
});
server.listen(8080);
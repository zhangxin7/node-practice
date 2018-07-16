var http = require('http');
// console.log(http);

var hostname = 'localhost';
var port = 8080;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});
// console.log(server);

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
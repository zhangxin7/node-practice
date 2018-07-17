var http = require('http');
var fs = require('fs');

var hostname = 'localhost';
var port = 8080;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');

  if (req.url === '/favicon.ico') {  // 浏览器默认发起的请求
    res.end(null);
    return;
  }

  // 异步读取文件内容
  fs.readFile(__dirname + '/text.txt', function(err, data) {
    if (err) {
      console.error(err);
      res.end('读取文件内容失败');
    }

    console.log(data.toString());
    res.end(data);
  });
});
// console.log(server);

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
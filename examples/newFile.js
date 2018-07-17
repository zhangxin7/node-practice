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

  var text = new Date();

  // 异步创建文件
  fs.writeFile(__dirname + '/newFile.txt', text, function(err) {
    if (err) {
      console.error(err);
      res.end('创建文件失败');
    }

    res.end(`创建文件成功\n文件内容：${text}`);
  });
});
// console.log(server);

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
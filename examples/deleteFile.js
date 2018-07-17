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

  // 异步删除文件
  fs.unlink(__dirname + '/newFile.txt', function(err) {
    if (err) {
      console.error(err);
      if (err.code === 'ENOENT') {
        res.end('文件不存在，删除文件失败');
      }
      
      res.end('删除文件失败');
    }

    res.end('删除文件成功');
  });
});
// console.log(server);

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
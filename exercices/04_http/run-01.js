const http = require('http')

const server = http.createServer((req, res) => {
    res.end('coucou.js');
  });

server.listen(9000,'127.0.0.1');
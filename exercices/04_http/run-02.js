const http = require('http')

const server = http.createServer((req, res) => {
    res.end(`methode: ${req.method} sur l'url ${req.url}`);
  });

server.listen(9000,'127.0.0.1');
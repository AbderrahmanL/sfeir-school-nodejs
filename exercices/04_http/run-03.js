const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/404'){
      res.statusCode = 404;
    }
    res.end(`methode: ${req.method} sur l'url ${req.url}`);
  });

server.listen(9000,'127.0.0.1');
const http = require('http')
const https = require('https')
const url = require('url')


const options = {
};

const server = http.createServer((req, res) => {
    if(req.url === '/google' && req.method === 'GET'){
      res.setHeader('Content-Type', 'image/png');
      var image = url.parse(`https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png`);
      console.log('fetching');
      https.get(image, (imgResp) => {
        imgResp.pipe(res);
      })
    }
    else if(req.url === '/404') {
      res.statusCode = 404;
      res.end();
    }
    else{
      res.end(`methode: ${req.method} sur l'url ${req.url}`);
    }
  });

server.listen(9000,'127.0.0.1');
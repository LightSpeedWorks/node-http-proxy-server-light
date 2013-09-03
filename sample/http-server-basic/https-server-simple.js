var https = require('https');
var fs = require('fs');
var options = {pfx: fs.readFileSync('secure.pfx'),
               passphrase: 'passphrase'};
https.createServer(options, function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at https://127.0.0.1:1337/');

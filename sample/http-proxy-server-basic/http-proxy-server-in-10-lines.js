var http = require('http'), url = require('url');
http.createServer(function onCliReq(cliReq, cliRes) {
  var x = url.parse(cliReq.url);
  var opt = {host: x.hostname, port: x.port || 80, path: x.path,
             method: cliReq.method, headers: cliReq.headers};
  var svrReq = http.request(opt, function onSvrRes(svrRes) {
    cliRes.writeHead(svrRes.statusCode, svrRes.headers);
    svrRes.pipe(cliRes); });
  cliReq.pipe(svrReq);
}).listen(8080);

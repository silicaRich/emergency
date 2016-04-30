var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
//var serveStatic = require('serve-static');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send(cool());
});

//app.use(serveStatic('public/ftp', {'index': ['index.html', 'index.html']}));

app.use(express.static(__dirname + '/public'));

console.log("i'm derping out");


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

/*
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888;
 
http.createServer(function(request, response) {
 
  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }
 
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';
 
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
 
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));
 
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
*/
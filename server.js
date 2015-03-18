var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index')
});

server.listen(8080, function(){
  console.log("server listening on port 8080");
});

module.exports = server;
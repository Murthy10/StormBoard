var express = require('express'),
  path = require('path'),
  fs = require('fs');

var app = express();
var staticRoot = __dirname + '/../dist/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.use(function (req, res, next) {

  // if the request is not html then move along
  var accept = req.accepts('html', 'json', 'xml');
  if (accept !== 'html') {
    return next();
  }

  // if the request has a '.' assume that it's for a file, move along
  var ext = path.extname(req.path);
  if (ext !== '') {
    return next();
  }

  fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

//app.all('/*', function(req, res, next) {
//    res.sendFile('index.html', { root: __dirname + '/' });
//});

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function () { /* … */
});


server.listen(app.get('port'), function () {
  console.log('app running on port', app.get('port'));
});


var kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  client = new kafka.Client('172.17.0.2:2181'),
  consumer = new Consumer(
    client,
    [
      {topic: 'results', partition: 0}
    ],
    {
      autoCommit: false
    }
  );


consumer.on('message', function (message) {
  io.emit('message', message);
  console.log(message);
});


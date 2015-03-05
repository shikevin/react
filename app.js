var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get ('/comments.json', function(req, res) {

  var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
  ];

  res.json(data);
});

app.listen(app.get('port'));
console.log("app listening on port: " + app.get('port'));

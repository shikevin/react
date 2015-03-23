var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

// uses the .html extension instead of renaming views to *.ejs
app.engine('.html', require('ejs').__express);
 
// sets folder to where html pages are kept
app.set('views', __dirname + '/views');
 
// allows filename to be passed to render function without extension
app.set('view engine', 'html');

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

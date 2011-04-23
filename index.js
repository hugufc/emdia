var app = require('express').createServer();

app.set('view engine', 'html');
app.register(".html", require("jqtpl").express);

app.get('/', function(req, res){
  res.render('inicio');
});

app.listen(process.env.C9_PORT, "0.0.0.0");
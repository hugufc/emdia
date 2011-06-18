var express = require("express"),
    app = express.createServer(),
    fs = require("fs"),
    mongoose = require("mongoose");

app.configure(function() {
    app.set("view engine", "html");
    app.register(".html", require("jqtpl").express);
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

mongoose.connect("mongodb://localhost/emdia");
mongoose.connection.on("open", function(){
  console.log("mongodb is connected!!");
});

(function initModels() {
    fs.readdir(__dirname + '/models', function(err, filenames) {
        if (err) throw err;
        filenames.forEach(function (filename) {
            require("./models/" + filename)(mongoose);
        });
    });    
})();

(function initRoutes() {
    fs.readdir(__dirname + '/routes', function(err, filenames) {
        if (err) throw err;
        filenames.forEach(function (filename) {
            require("./routes/" + filename)(app, mongoose);
        });
    });
})();

app.listen("3000");
console.log("funfo na calabresa");

var app = require("express").createServer(),
    fs = require("fs");

app.set("view engine", "html");
app.register(".html", require("jqtpl").express);

(function initRoutes() {
    fs.readdir(__dirname + '/routes', function(err, filenames) {
        if (err) throw err;
        filenames.forEach(function (filename) {
            require("./routes/" + filename)(app);
        });
    });
})();


app.listen("3000");

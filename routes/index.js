module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("inicio");
    });
    
    app.get("/sobre", function (req, res) {
        res.render("sobre", {"modelo": {"nome": "hugo"}});
    });
};

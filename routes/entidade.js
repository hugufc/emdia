module.exports = function (app, modelImpl) {
    var Entidade = modelImpl.model("Entidade");
    
    app.get("/usuarios", function (req, res) {
        res.render("usuario", {usuario : {}});
    });
    
    app.get("/usuarios/:usuario", function (req, res) {
        Entidade.findOne({nome: req.params.usuario}, function (err, doc) {
            if (err) throw err;
            if (doc)
                res.render("usuario", {usuario : doc});
            else
                res.render("usuario", {usuario : {}});
        });
    });
    
    app.post("/usuarios/cria", function (req, res) {
        var usuario = new Entidade();
        usuario.nome = req.body.nome;
        usuario.idade = 21;
        
        usuario.save(function (err) {
            if(err) throw err;
            
        });
        
        res.render("usuario", {usuario : {}});
    });
};

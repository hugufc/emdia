module.exports = function (modelImpl) {   
    modelImpl.model("Entidade", new modelImpl.Schema({
        nome: { type: String, default: 'Hugo' },
        idade: { type: Number, min: 18, index: true }
    }));
};

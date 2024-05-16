const Contrato = require('../models/contratos');

module.exports.listContratos = () => {
    return Contrato.find().sort({ "idcontrato": 1 }).exec();
};

module.exports.findById = id => {
    return Contrato.findOne({ "idcontrato": id }).exec();
};

module.exports.findByEntidade = entidade => {
    return Contrato.find({ "entidade_comunicante": entidade }).exec();
};

module.exports.findByTipo = tipo => {
    return Contrato.find({ "tipoprocedimento": tipo }).exec();
};

module.exports.listEntidades = () => {
    return Contrato.distinct("entidade_comunicante").sort()
}

module.exports.listTipos = () => {
    return Contrato.distinct("tipoprocedimento").sort()
}

module.exports.insert = contrato => {
    return Contrato.create(contrato);
};

module.exports.update = (id, contrato) => {
    return Contrato.updateOne({ "idcontrato": id }, contrato);
};

module.exports.remove = id => {
    return Contrato.deleteOne({ "idcontrato": id });
};
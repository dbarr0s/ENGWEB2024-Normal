var express = require('express');
var router = express.Router();

const Contrato = require('../controllers/contratos');

router.get('/', function(req, res, next) {
  const entidade = req.query.entidade
  const tipo = req.query.tipo
  if (entidade) {
    Contrato.findByEntidade(entidade).then(dados => {
      res.json(dados)
    })
  } else if (tipo) {
    Contrato.findByTipo(tipo).then(dados => {
      res.json(dados)
    })
  } else {
    Contrato.listContratos().then(dados => {
      res.json(dados)
    })
  }
});

router.get('/:id', (req, res) => {
  Contrato.findById(req.params.id)
      .then(dados => {res.render('ContratoPage', {planta: dados})})
      .catch(erro => res.status(500).jsonp(erro));
});

router.get('/entidades', (req, res) => {
  Contrato.listEntidades()
      .then(dados => res.json(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.get('/tipos', (req, res) => {
  Contrato.listTipos()
      .then(dados => res.json(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.get('/delete/:id', (req, res) => {
  Contrato.remove(req.params.id)
      .then(dados => res.json(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', (req, res) => {
  Contrato.insert(req.body)
      .then(dados => res.json(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', (req, res) => {
  const contratoId = req.params.id;
  const novoContrato = req.body;

  Contrato.update(contratoId, novoContrato)
      .then(dados => res.json(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;

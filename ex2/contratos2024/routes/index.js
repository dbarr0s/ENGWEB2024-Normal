var express = require('express');
var router = express.Router();

const Contrato = require('../controllers/contratos');

/* GET home page. */
router.get('/', function(req, res, next) {
  Contrato.listContratos().then(dados => {
    res.render('index', {titulo: 'Contratos 2024', contratos: dados})
  })
});

module.exports = router;

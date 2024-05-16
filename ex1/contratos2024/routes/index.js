var express = require('express');
var router = express.Router();

const Contrato = require('../controllers/contratos');

/* GET home page. */
router.get('/', function(req, res, next) {
  Contrato.list().then(dados => {
    res.render('contratosList', {title: 'Contratos 2024', contratos: dados})
  })
});

module.exports = router;

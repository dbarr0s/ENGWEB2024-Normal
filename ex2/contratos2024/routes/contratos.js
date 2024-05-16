const express = require('express');
const router = express.Router();

const Contrato = require('../controllers/contratos');

router.get('/:id', async (req, res) => {
  Contrato.findById(req.params.id).then(contrato => {
      res.render("contrato", {"contrato": contrato, "titulo": "Contrato Nº" + req.params.id});
  })
});

module.exports = router;

const express = require('express');
const router = express.Router();
const usuarios=require('../../controllers/usuarios/lists');

/* GET home page. */
router.get('/', usuarios.listAll);

module.exports = router;

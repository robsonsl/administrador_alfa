const express=require('express');
const router=express.Router();
const usuarios=require('../../controllers/usuarios/save');

router.post('/',usuarios.new);

module.exports=router;
const mongoose = require('mongoose');
const usuarios=require('../../models/usuarios');

module.exports={
    listAll:(req,res)=>{
        usuarios.find({'ativo':'true'},(err,results)=>{
            res.render('usuarios/index',{data:results});
        });
    }
}
const mongoose = require('mongoose');
const usuarios = require('../../models/usuarios');

module.exports={

    new:(req, res)=>{

        let newUsuario=new usuarios({
            nome:req.body.nome,
            email:req.body.email,
            login:req.body.login,
            senha:req.body.senha,
            creation:Date(),
            ativo:'true'
        });

        newUsuario.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Erro ao salvar!!!',
                    erro:err
                })
            }
            res.redirect('/usuarios');
        })
    },
}
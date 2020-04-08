const mongoose = require('mongoose');

let usuariosSchema = new mongoose.Schema({
    nome:{type:String},
    login:{type:String},
    email:{type:String},
    senha:{type:String},
    creation:{type:Date},
    ativo:{type:Boolean},
});

module.exports=mongoose.model('Usuarios',usuariosSchema);
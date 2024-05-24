const {Schema,model} = require('mongoose');


const clienteSchema = Schema({

    nombre:{
        type:String
    },

    email:{
        type:String
    },

    fechaCreacion: {
        type: Date,
        default: new Date(),
    },
    
    fechaActualizacion: {
        type: Date,
        default: new Date(),
    }
});

module.exports = model('Cliente',clienteSchema);
const{Schema,model} =  require('mongoose');

const UniversidadSchema = Schema({

    nombre:{
        type:String,
        require: true
    },
    direccion:{
        type:String
    },
    telefono:{
        type:String,
        require: true
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

module.exports = model('Univesidad',UniversidadSchema);
const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: Number,
        unique: [true, 'La numeración es única'],
        minLength: 1
    },

    titulo: {
        type: String,
        default: true,
        required: true,
    },

    fechaIniciacion: {
        type: Date,
        require: true
    },

    fechaEntrega: {
        type: Date,
        require: true
    },

    valor: {
        type: Number,
        default: 0,
    },

    fechaCreacion: {
        type: Date,
        default: new Date(),
    },

    fechaActualizacion: {
        type: Date,
        default: new Date(),
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        require: true,
    },

    nombreCliente: {
        type:String
    },

    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo Proyecto',
        require: true,
    },

    nombreTipo:{ 
        type:String
    },

    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        require: true,
    },

    nombreUniversidad:{
        type:String
    },

    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        require: true,
    },

    nombreEtapa:{
        type:String
    }
});

module.exports = model('Proyecto', ProyectoSchema);

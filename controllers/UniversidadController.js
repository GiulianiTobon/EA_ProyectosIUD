const {validationResult} = require('express-validator');
const Universidad = require('../models/Universidad');

const getUniversidad = async function(req, res) {

    try{
        const universidades = await Universidad.find();
        res.send(universidades)
    }catch (e){
        return res.status(500).json({
            message: e
        })
    }
}

const postUniversidad = async function (req, res){

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ mensaje: errors.array() });
        }

        const body = req.body; 
        const universidad = new Universidad(body)

        universidad.save();
        await res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}

const putUniversidad = async function(req, res){

    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({mensaje: errors.array()})
        }

        const universidad = await Universidad.findOneAndUpdate(
            { nombre: req.params.nombre }, // Filtro por su nombre
            {
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaActualizacion: new Date()
            },
            {new: true}
        );
        res.send(universidad)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}

module.exports = {
    getUniversidad,
    postUniversidad,
    putUniversidad
}
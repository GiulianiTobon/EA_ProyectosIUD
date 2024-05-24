const {validationResult} = require('express-validator');
const Etapa = require('../models/Etapa');


const getEtapas = async function(req, res){
    
    try{
        const etapas = await Etapa.find();
        res.send(etapas)
    }catch (e){
        return res.status(500).json({
            message: e
        })
    }
}

const postEtapas = async function(req, res){

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ mensaje: errors.array() });
        }

        const body = req.body; 
        const etapa = new Etapa(body)

        etapa.save();
        await res.status(201).json(etapa)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }

}

const putEtapas = async function(req,res){

    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({mensaje: errors.array()})
        }

        const etapa = await Etapa.findOneAndUpdate(
            { nombre: req.params.nombre }, // Filtro para por su nombre
            {
                nombre: req.body.nombre,
                email: req.body.email,
                fechaActualizacion: new Date()
            },
            {new: true}
        );
        res.send(etapa)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}


module.exports = {
    getEtapas,
    postEtapas,
    putEtapas
}
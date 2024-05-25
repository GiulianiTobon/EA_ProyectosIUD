const {validationResult} = require('express-validator');
const TipoProyecto = require('../models/TipoProyecto');

const getTiposProyectos = async function(req, res){
    
    try{
        const proyectos = await Proyecto.find();
        res.send(proyectos)
    }catch (e){
        return res.status(500).json({
            message: e
        })
    }
}

const postTiposProyectos = async function(req, res){
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ mensaje: errors.array() });
        }

        const body = req.body; 
        const tipoProyectoExiste = await TipoProyecto.findOne({nombre: body.nombre})
        if(tipoProyectoExiste){
            res.send(tipoProyectoExiste + "ya existe, intente con otro tipo de proyecto diferente")
        }else{
            const tipoProyecto = new TipoProyecto(body)
            tipoProyecto.save();
            await res.status(201).json(tipoProyecto)
        }      
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}

const putTiposProyectos = async function(res, req){

    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({mensaje: errors.array()})
        }

        const tipoProyecto = await TipoProyecto.findOneAndUpdate(
            { nombre: req.params.nombre }, // Filtro para por su nombre
            {
                nombre: req.body.nombre,
                fechaActualizacion: new Date()
            },
            {new: true}
        );
        res.send(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}

module.exports = {
    getTiposProyectos,
    postTiposProyectos,
    putTiposProyectos
}


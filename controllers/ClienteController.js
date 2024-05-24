const {validationResult} = require('express-validator');
const Cliente = require('../models/Clientes');


const getCliente = async function(req, res){
    
    try{
        const cliente = await Cliente.find();
        res.send(cliente)
    }catch (e){
        return res.status(500).json({
            message: e
        })
    }
}

const postCliente = async function(req, res){

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ mensaje: errors.array() });
        }

        const body = req.body; 
        const cliente = new Cliente(body)

        cliente.save();
        await res.status(201).json(cliente)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }

}

const putCliente = async function(req,res){

    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({mensaje: errors.array()})
        }

        const cliente = await Cliente.findOneAndUpdate(
            { nombre: req.params.nombre }, // Filtro para por su nombre
            {
                nombre: req.body.nombre,
                email: req.body.email,
                fechaActualizacion: new Date()
            },
            {new: true}
        );
        res.send(cliente)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}

module.exports = {
    getCliente,
    postCliente,
    putCliente
}
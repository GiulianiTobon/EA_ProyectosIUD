const {Router} = require('express');
const {
    getProyectos,
    postProyectos,
    putProyectos
} = require('../controllers/ProyectosController');

const router = Router();


router.get('/Proyectos', getProyectos);

router.post('/CrearProyectos', postProyectos);

router.put('/:nombre', putProyectos);

module.exports = router;
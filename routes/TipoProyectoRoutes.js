const {Router} = require('express');
const {
    getTiposProyectos,
    postTiposProyectos,
    putTiposProyectos
} = require('../controllers/TiposProyectosController');

const router = Router();


router.get('/', getTiposProyectos);

router.post('/', postTiposProyectos);

router.put('/:nombre', putTiposProyectos);

module.exports = router;
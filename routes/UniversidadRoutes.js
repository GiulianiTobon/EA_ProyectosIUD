const {Router} = require('express');
const {
    getUniversidad,
    postUniversidad,
    putUniversidad
} = require('../controllers/UniversidadController');

const router = Router();


router.get('/', getUniversidad);

router.post('/', postUniversidad);

router.put('/:nombre', putUniversidad);

module.exports = router;
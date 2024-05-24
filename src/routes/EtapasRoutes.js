const {Router} = require('express');
const {
    getEtapas,
    postEtapas,
    putEtapas
} = require('../controllers/EtapasController');

const router = Router();


router.get('/', getEtapas);

router.post('/',postEtapas);

router.put('/:nombre',putEtapas);

module.exports = router;
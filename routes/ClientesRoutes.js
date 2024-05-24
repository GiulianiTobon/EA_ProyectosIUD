const {Router} = require('express');
const {
    getCliente,
    postCliente,
    putCliente
} = require('../controllers/ClienteController');

const router = Router();


router.get('/',getCliente);

router.post('/',postCliente);

router.put('/:nombre', putCliente);

module.exports = router;
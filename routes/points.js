const { crearPuntos, eliminarPuntos, verPuntos } = require('../controllers/points');
const { Router } = require('express');
const router = Router();



router.post('/crear', crearPuntos);

router.delete('/borrar', eliminarPuntos);

router.get('/ver', verPuntos);




module.exports = router;
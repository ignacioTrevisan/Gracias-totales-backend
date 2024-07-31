const { crearCanje, modificarCanje, obtenerCanjePorUsuario, obtenerCanjeParticular, obtener } = require('../controllers/canje');
const { crearPuntos, eliminarPuntos } = require('../controllers/points');
const { Router } = require('express');
const router = Router();



router.post('/crear', crearCanje);

router.put('/modificar', modificarCanje);

router.post('/obtener', obtener);

router.post('/obtenerPorUsuario', obtenerCanjePorUsuario);

router.post('/obtenerParticular', obtenerCanjeParticular);





module.exports = router;
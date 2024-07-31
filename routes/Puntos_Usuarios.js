const { Router } = require('express');
const { cargarPuntos, obtenerPuntos } = require('../controllers/Usuarios_puntos');
const router = Router();

router.put('/cargar', cargarPuntos);

router.post('/obtener', obtenerPuntos);



module.exports = router;


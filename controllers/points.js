const { response } = require('express');
const Puntos = require('../models/Puntos');

const crearPuntos = async (req, res = response, next) => {

    try {
        const puntos = new Puntos(req.body);
        const puntosGuardados = await puntos.save();
        res.json({
            ok: true,
            puntos: puntosGuardados,
        });
    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: ' Por favor hable con el administrador '
        });
    }
}

const eliminarPuntos = async (req, res = response, next) => {
    const puntos = await Puntos.findOneAndDelete({ cantidad: req.body.cantidad });
    if (puntos) {

        return res.status(200).json({
            ok: true,
            msg: 'borrar Evento'
        })
    } else {
        return res.status(404).json({
            ok: false,
            msg: 'No se encontraron estos puntos'
        })
    }

}

const verPuntos = async (req, res = response, next) => {
    const puntos = await Puntos.find();
    if (puntos) {

        return res.status(200).json({
            ok: true,
            puntos
        })
    } else {
        return res.status(404).json({
            ok: false,
            msg: 'No se encontro puntos'
        })
    }

}

module.exports = {
    crearPuntos,
    eliminarPuntos,
    verPuntos
}
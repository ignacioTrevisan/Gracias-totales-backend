const { response } = require('express');
const Canje = require('../models/Canje');


const crearCanje = async (req, res = response, next) => {
    try {
        const canje = new Canje(req.body);
        const canjeGuardados = await canje.save();
        console.log('canjeGuardado:', canjeGuardados)
        res.json({
            ok: true,
            canje: canjeGuardados,
        });
    } catch (error) {
        console.log('ssss', error)
        res.json({
            ok: false,
            msg: ' Por favor hable con el administrador '
        });
    }
}

const modificarCanje = async (req, res = response, next) => {
    const { id } = req.body;
    try {
        const busqueda = await Canje.findById(id);
        busqueda.reclamado = true;
        const canje = await Canje.findByIdAndUpdate(id, { ...busqueda }, { new: true });

        return res.json({
            ok: true,
            nuevoCanje: canje
        })
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
        })
    }
}

const obtenerCanjePorUsuario = async (req, res = response, next) => {
    const { uid } = req.body;
    try {
        const busqueda = await Canje.find({ uid: uid });

        return res.json({
            ok: true,
            busqueda: busqueda
        })
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
        })
    }
}

const obtenerCanjeParticular = async (req, res = response, next) => {
    const { id } = req.body;
    try {
        const busqueda = await Canje.findById(id);
        return res.json({
            ok: true,
            busqueda: busqueda
        })
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
        })
    }
}

const obtener = async (req, res = response, next) => {

    try {
        const busqueda = await Canje.find();
        return res.json({
            ok: true,
            busqueda: busqueda
        })
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
        })
    }
}

module.exports = {
    crearCanje,
    obtener,
    modificarCanje,
    obtenerCanjeParticular,
    obtenerCanjePorUsuario
}
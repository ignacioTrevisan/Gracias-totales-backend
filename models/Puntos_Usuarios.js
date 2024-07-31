const { Schema, model } = require('mongoose');

const Puntos_UsuariosSchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    cantidad: {
        type: String,
        required: true
    },
})

Puntos_UsuariosSchema.method('toJSON', function () {

    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})



module.exports = model('Puntos_Usuarios', Puntos_UsuariosSchema);
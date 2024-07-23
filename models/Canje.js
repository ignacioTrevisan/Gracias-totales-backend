const { Schema, model } = require('mongoose');

const canje = new Schema({
    uid: {
        type: String,
        required: true,
    },
    idProducto: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    reclamado: {
        type: Boolean,
        required: true,
    }
})

canje.method('toJSON', function () {

    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})



module.exports = model('canje', canje);
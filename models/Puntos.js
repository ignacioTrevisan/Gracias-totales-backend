const { Schema, model } = require('mongoose');

const PuntosSchema = new Schema({
    cantidad: {
        type: String,
        required: true
    },

    codigo: {
        type: String,
        required: true
    }
})

PuntosSchema.method('toJSON', function () {

    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})



module.exports = model('Puntos', PuntosSchema);


const express = require('express')

require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

const app = express();





dbConnection();

app.use(express.json());

app.use(cors());


app.use('/api/points', require('./routes/points'));
app.use('/api/puntosUsuarios', require('./routes/Puntos_Usuarios'));
app.use('/api/canjes', require('./routes/canjes'));



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el servidor ${process.env.PORT}`)
})




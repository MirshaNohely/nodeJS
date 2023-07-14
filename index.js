
import express from 'express';
import usuarioRoutes from './routes/usuarioRautes.js'

//creando la aplicacion
const app = express()


//Routing
app.use('/', usuarioRoutes)
//app.get('/', function(req, res) {
    //res.send('Hola mundo en express')
//});
app.use('/nosotros', usuarioRoutes)


//Definiendo el puerto para arrancar el proyecto
const port = 5000;

app.listen(port, () => {
    console.log("El servidor esta funcionando en el puerto ${port}")
}); 
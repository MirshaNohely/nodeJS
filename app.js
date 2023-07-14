
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

//crea la app
const app = express()

//Routing
app.use('/', usuarioRoutes)


//definiendo puerto y arrancando el proyecto
const port = 3001;

app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});

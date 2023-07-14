import express from "express";

const router = express.Router();

router.get('/', function(req, res)  {
    res.json({msg: 'Hola Mundo en express'})
});

router.get('/nosotros', function(req, res)  {
    res.json({msg: 'Respuesta de tipo post'})
});

export default router
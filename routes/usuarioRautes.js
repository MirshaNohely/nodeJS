import express from "express";

const router = express.Router();

router.get('/', function(req, res){
    res.json({msg: 'Hola Mundo en express'})
});

router.get('/karma', function(req, res){
    res.json({msg: 'And I Keep My Side On The Street Clean, You Wouldnt Know What I Mean'})
});

export default router

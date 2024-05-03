const express = require('express');
const router = express.Router();
const songRouter= require('./song.router')
// colocar las rutas aquí
router.use('/songs',songRouter)

module.exports = router;
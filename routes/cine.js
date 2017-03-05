var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('cine',
    { title: 'Las rutas de la circulación para el cine latinoamericano alternativo',
    texto: 'La investigación pretende crear una plataforma web que informe a los nuevos creadores sobre las rutas de circulación de sus obras en espacios virtuales y físicos',
    foto: 'http://i.giphy.com/LNgKEmv1ZCdeE.gif'
  }
  );
});

module.exports = router;

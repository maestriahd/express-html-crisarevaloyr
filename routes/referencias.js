var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('referencias',
    { title: 'Páginas que sirven de modelo para mi investigación',
    texto: 'las referencias son de distinto tipo',
    foto: 'http://i.giphy.com/wzy4qpGkG8PGE.gif'
  }
  );
});

module.exports = router;

var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('cine',
    { title: 'Circulación de cine',
    texto: 'investigación hd',
    foto: 'https://www.mundogato.net/wp-content/uploads/normas-de-higiene-en-los-gatos-1-485x300.jpg'
  }
  );
});

module.exports = router;

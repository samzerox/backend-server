var express = require('express');

var fs = require('fs');

var app = express();



app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var path = `./uploads/${ tipo }/${ img }`;

    fs.exists(path, existe => {
        if (!existe) {
            path = './assets/no-img.jpg'
        }

        // Esta linea se uso en clase pero esta obsoleta
        // res.sendfile(path);

        // Esta es la linea correcta pero no se si funcione despues Y en todos lados
        res.sendFile(path, { root: 'C:/Users/Sam/Desktop/angular adv/backend-server/' });

    });


});

module.exports = app;
var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/API';

mongoose.connect(urlString, function(error, res) {
    if (error) {
        console.log('Não foi possivel conectar a: ' + urlString);
    } else {
        console.log('Conectado a: ' + urlString);
    }
});
var http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

//Al dirigirnos al localhost/1337 se nos redirige a una página en blanco con el enunciado 'Hello world'.
//En la sección de los headers podemos observar la información general de los métodos utilizados para la solicitud y respuesta del servidor. Además, se utilizó el método GET para la solicitud de los paquetes.
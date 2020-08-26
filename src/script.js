//create my first server nodejs
const http = require('http');
const fileSystem = require('fs');
const urlFind = require('url');




const server = http.createServer(function(req, res) {
    const path = urlFind.parse(req.url, true);
    console.log(path);
    fileSystem.readFile('./test.html', (err, data) => {

        if (err) {

            res.write("erreur 404 page not existe"); //write a response to the client
            return res.end(); //end the response
        } else {

            res.write(data); //write a response to the client
            return res.end(); //end the response
        }
    });

});
//the server object listens on port 8080 
server.listen(8080, '127.0.0.1', () => {
    console.log('server started');
});
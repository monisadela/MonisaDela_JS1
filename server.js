const http = require('http');
const fs = require('fs');

const requestListener = (request, response) => {
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Internal Server Error');
                return;
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('404 Not Found');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

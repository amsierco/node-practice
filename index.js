const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

http.createServer((req, res) => {
    if(req.url === '/'){
        console.log('homepage');
        fs.readFile('./index.html', (err, data) => {
            if(err){ throw err; }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        })
    } else if (req.url === '/about'){
        console.log('about');
        fs.readFile('./about.html', (err, data) => {
            if(err){ throw err; }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        })
    } else if (req.url === '/contact') {
        console.log('contact');
        fs.readFile('./contact-me.html', (err, data) => {
            if(err){ throw err; }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        })
    } else {
        console.log('404');
        fs.readFile('./404.html', (err, data) => {
            if(err){ throw err; }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        })
    }

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

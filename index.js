const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    //index page
    // if(req.url == '/'){

    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content);

    //     })
    // }
    // if(req.url == '/about'){

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content);

    //     })
    // }
    // if(req.url == '/api/users'){
    //         const users = [
    //             { name: 'Daniel Ruiz', age: 22 },
    //             { name: 'Kelsey Samson', age: 21 }
    //         ];
    //         res.writeHead(200, {'Content-Type': 'application/json' });
    //         res.end(JSON.stringify(users));
    //     }

        //Build FilePath
        let FilePath = path.join(__dirname, 'public', req.url == '/' ? 'index.html' : req.url);
        // console.log(FilePath);
        // res.end();
        let extname = path.extname(FilePath);

        //set the initial content type
        let contentType = 'text/html';

        //check the ext
        switch(extname){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case 'json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
        }


        //Read file
        fs.readFile(FilePath, (err, content) => {
            if(err){
                if(err.code == 'ENOENT'){
                    //Page not found
                    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                        res.writeHead(200, {'Content-Type': 'text.html'});
                        res.end(content, 'utf8');
                    });
                } else {
                    //server error
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            }
            else{
                //Successful response
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content, 'utf8');
            }
        });
    });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
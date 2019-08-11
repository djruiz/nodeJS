const http = require('http');

//create server object
http.createServer((req, res) => {
    //when we get a request we want to create a response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('server running'));
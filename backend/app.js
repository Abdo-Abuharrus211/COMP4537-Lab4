const http = require("http");
const url = require('url');

class DictionaryServer{
    constructor(port){
        // Dictionary should be an array of objects
        // -> {word: defintion}
        this.dictionary = [];
        this.port = port;
        this.server = http.createServer(this.handleRequest.bind(this));
    }

    handleRequest(req, res){
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;

        if(req.method === 'GET'){
            //Do stuff here
            // get word def or return error message
        }
        else if(req.method === 'POST'){
            // check if word in storage otherwise add and return success
        }
        else{
            this.handleMethodNotAllowed(res);
        }
    }

    /*
    *   For Unallowed methods/requests
    */
    handleMethodNotAllowed(res) {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end("Method Not Allowed");
    }
}


// Start the server
const PORT = process.env.PORT || 8080;
const app = new Server(PORT);
app.start();
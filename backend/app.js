const http = require("http");
const url = require('url');

class DictionaryServer{
    constructor(port){
        this.port = port;
        this.server = http.createServer(this.handleReq)
    }
}


// Start the server
const PORT = process.env.PORT || 8080;
const app = new Server(PORT);
app.start();
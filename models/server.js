const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = "/api/users";

        this.middleware();


        this.routes();
    }
    middleware() {
        //CORS
        this.app.use(cors());

        //PARSEO U LECTURA DEL BODY
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usersPath, require("../routes/users"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Example app listening at http://localhost:', this.port);
        });
    }
}

module.exports = Server;
require('dotenv').config();
const Server = require('./models/server');

const express = require("express");
const app = express();

const server = new Server();

server.listen();
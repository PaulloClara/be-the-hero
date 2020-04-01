const express = require("express");
const { join } = require("path");
const serveStatic = require("serve-static");

const server = express();
const port = process.env.PORT || 3333;

server.use(serveStatic(join(__dirname, "dist")));

server.listen(port);

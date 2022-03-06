import express from "express";

const config = require("./config.ts");
const loader = require("./loaders/loader");

function serverRun() {
  const app = express();
  const server = app.listen(config.server.port);

  server.on("listening", () => {
    loader(app)
    return console.info(
      `Express is listening on http://localhost:${config.server.port}`
    );
  });
}

serverRun();

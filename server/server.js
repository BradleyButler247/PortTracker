"use strict";
const app = require("./app");
const { PORT } = require("./config");
const { SERVER_PORT } = require("./config");

const server = app.listen(SERVER_PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
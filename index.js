const express = require("express");

const server = express();

const projectsRouter = require("./projectsRouter");

server.use(express.json());

server.use("/api/projects", projectsRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

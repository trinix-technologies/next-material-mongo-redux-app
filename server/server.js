const express = require("express");
const server = express();
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const { addServerApiRoutes } = require("../routes/server-routes");
const { addUiRoutes } = require("../routes/ui-routes");

app.prepare().then(() => {
  addServerApiRoutes(server, express);
  addUiRoutes(server, app);
  startServer();
});

function startServer() {
  const port = parseInt(process.env.PORT, 10) || 3000;
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
}

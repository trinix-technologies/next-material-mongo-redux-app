const routes = require("next-routes-extended");
const routesImplementation = routes();

function mapUiRoutes() {
  routesImplementation.add("about", "/a1");
  routesImplementation.add("createLogin", "/a2", "/login/CreateLogin");
}

function addUiRoutes(server, app) {
  mapUiRoutes();
  server.use(function (req, res, next) {
    next();
  });
  const uiRouterHandler = routesImplementation.getRequestHandler(app);
  server.get("*", uiRouterHandler);
  console.log("added UI Routes");
}

module.exports = { addUiRoutes };

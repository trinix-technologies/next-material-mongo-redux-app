const routes = require("next-routes-extended");
const routesImplementation = routes();

function mapUiRoutes() {
  routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
  // routesImplementation.add("createLogin", "/login", "/login/CreateLogin");
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

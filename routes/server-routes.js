const bodyParser = require("body-parser");
const path = require("path");

function mapServerRoutes(server) {
  server.use("/health", require("../server/api/health"));
  // server.use("/health", require("../server/api/health"));
  // server.use("/health", require("../server/api/health"));
  // server.use("/health", require("../server/api/health"));
  // server.use("/health", require("../server/api/health"));
  // server.use("/health", require("../server/api/health"));
  // server.use("/health", require("../server/api/health"));
}

function addServerApiRoutes(server, express) {
  server.disable("x-powered-by");
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  mapServerRoutes(server);
  addStaticContent(server, express);
  logRouts(server);
  console.log("added Server Api Routes");
}

function addStaticContent(server, express) {
  var oneDay = 86400000;
  server.use(
    "/",
    express.static(path.join(__dirname, "../public"), {
      maxAge: oneDay * 30,
    })
  );
}

function logRouts(server) {
  server._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
      console.log(r.route.path);
    }
  });
}

module.exports = { addServerApiRoutes };

let path = require("path");
let Users = require("./../controllers/users");
let Buckets = require("./../controllers/buckets");

module.exports = function(app) {
  // User  routing
  app.get("/user", Users.index);
  app.post("/user", Users.create);
  app.get("/user/:id", Users.show);
  app.delete("/user/:id", Users.logout);

  // Session routing
  app.get("/session", Users.session);

  // question routing
  app.get("/bucket", Buckets.index);
  app.post("/bucket", Buckets.create);
  app.patch("/bucket/:id", Buckets.update);

  // Path to the Angular Routing
  app.all("*", function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};

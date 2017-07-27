let path = require("path");
let Users = require("./../controllers/users");

module.exports = function(app) {
  // User  routing
  app.get("/users", Users.index);
  app.post("/users", Users.create);
  app.get("/user/:id", Users.show);
  app.delete("/users/:id", Users.logout);

  // Session routing
  app.get("/session", Users.session);

  // question routing
  app.get("/bucket", Buckets.index);
  app.post("/bucket", Buckets.create);
  app.patch("/question/:id", Buckets.update);

  // Path to the Angular Routing
  app.all("*", function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};

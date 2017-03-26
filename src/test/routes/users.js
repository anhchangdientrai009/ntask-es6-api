import jwt from "jwt-simple";

describe("Routes: Users", () => {
  const Users = app.db.models.Users;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  beforeEach(done => {
        Users
        .destroy({where: {}})
        .then(() => Users.create({
            name: "hoangtran",
            email: "hoangtran@gmail.com",
            password: "12345"
        }))
        .then(user => {
            token = jwt.encode({id: user.id}, jwtSecret);
            done();
        });
  });
  describe("GET /user", () => {
    describe("status 200", () => {
      it("Returns an authenticated user", done => {
            request.get("/user")
            .set("Authorization", `JWT ${token}`)
            .expect(200)
            .end((err, res) => {
                expect(res.body.name).to.eql("hoangtran");
                expect(res.body.email).to.eql("hoangtran@gmail.com");
                done(err);
            });
      });
    });
  });
  describe("DELETE /user", () => {
    describe("status 204", () => {
      it("Deletes an authenticated user", done => {
            request.delete("/user")
            .set("Authorization", `JWT ${token}`)
            .expect(204)
            .end((err, res) => done(err));
      });
    });
  });
  describe("POST /users", () => {
    describe("status 200", () => {
      it("Creates a new user", done => {
            request.post("/users")
            .send({
                name: "anhchangdientrai009",
                email: "anhchangdientrai009@gmail.com",
                password: "12345"
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body.name).to.eql("anhchangdientrai009");
                expect(res.body.email).to.eql("anhchangdientrai009@gmail.com");
                done(err);
            });
      });
    });
  });
});
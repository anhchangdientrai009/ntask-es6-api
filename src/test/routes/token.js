describe("Routes: Token", () =>{    
    describe("POST /token", () =>{
        const Users = app.db.models.Users;
        beforeEach(done =>{
            Users.destroy({where: {}})
                .then(() => {
                    Users.create({
                        name: "hoangtran",
                        email: "hoangtran@gmail.com",
                        password: "123456"
                    })
                })
                .then(() => done());
        });
        describe("status 200", () => {
            it("Return authenticate user token", done => {
                request.post("/token")
                    .send({
                        email: "hoangtran@gmail.com",
                        password: "123456"
                    })
                    .expect(200)
                    .end((error, res)=> {
                        expect(res.body).to.include.keys("token");
                        done(error);
                    });
            });
        });
        describe("status 401", () => {
            it("Throw error when password is incorrect", done => {
                request.post("/token")
                    .send({
                        email:"hoangtran@gmail.com",
                        password: "WROND_PASSWORD"
                    })
                    .expect(401)
                    .end((error, res) => {
                        done(error);
                    })
            });
            it("Throw error when email is not exist", done => {
                request.post("/token")
                    .send({
                        email:"wrongemail@gmail.com",
                        password: "123456"
                    })
                    .expect(401)
                    .end((error, res) => {
                        done(error);
                    })
            });
            it("Throw error when email and password are blank", done => {
                request.post("/token")                    
                    .expect(401)
                    .end((error, res) => {
                        done(error);
                    })
            });
        });
    });
});
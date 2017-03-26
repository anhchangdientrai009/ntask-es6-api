describe("Routes: Index", () => {
    describe("GET /", () => {
        it("Return the API status code", done => {
            request.get("/")
                .expect(200)
                .end((error, res) => {
                    const expectd = {status: "NTask API"};
                    expect(res.body).to.eql(expectd);
                    done(error);
                });
        });
    });
});
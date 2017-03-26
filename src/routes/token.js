import jwt from "jwt-simple";

module.exports = (app) =>{
    const config = app.libs.config;
    const Users = app.db.models.Users;

    /**
     * @api {post} /token Authentication token
     * @apiGroup Credentials
     * @apiParam {String} email User email
     * @apiParam {String} password User password
     * @apiParamExample {json} Input
     *  {
     *      "email": "hoangtran@gmail.com",
     *      "password": "123456"
     *  }
     * @apiSuccess {String} token Token of authenticated user
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 200 OK
     *  { "token": "acb.ghj.net" }
     * @apiErrorExample {json} Authencation error
     *  HTTP/1.1 401 Unauthorized
     */
    app.post("/token", (req, res) => {
        if(req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;

            Users.findOne({where: { email: email } })
                .then(user => {
                    if(Users.validatePassword(user.password, password)) {
                        const payload = { id: user.id };
                        res.json({
                            token: jwt.encode(payload, config.jwtSecret)
                        })
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(error => res.sendStatus(401));
        } else {
            res.sendStatus(401);
        }
    });
};
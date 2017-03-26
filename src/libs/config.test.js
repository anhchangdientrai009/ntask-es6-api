module.exports = {
    database: "ntasks_test",
    username: "root",
    password: "",
    params: {
        host: "localhost",
        dialect: "mysql",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "NTASK_TEST",
    jwtSession:{ session: false }
};
import logger from "./logger.js";

module.exports = {
    database: "ntasks",
    username: "root",
    password: "",
    params: {
        host: "localhost",
        dialect: "mysql",
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: "N!2#$%^&*0task+",
    jwtSession:{ session: false }
};
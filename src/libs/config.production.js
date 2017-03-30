import logger from "./logger.js";

module.exports = {
    database: "sql12166466",
    username: "sql12166466",
    password: "aPCmChqrUl",
    params: {
        host: "sql12.freemysqlhosting.net",
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

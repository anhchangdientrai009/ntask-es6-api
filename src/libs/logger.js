import fs from "fs";
import winston from "winston";

if(!fs.existsSync("src/logs")) {
    fs.mkdirSync("src/logs");
}

module.exports = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "src/logs/app.log",
            maxsize: 1048576,
            maxFile: 10,
            colorize: false
        })
    ]
});
import fs from "fs";
import https from "https";

module.exports = app => {  
    if(process.env.NODE_ENV !== "test") {
        const credentials = {
            key: fs.readFileSync("ntasks.key"),
            cert: fs.readFileSync("ntasks.cert")
        }
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get('port'), () => {
                console.log(`NTask API Port-${app.get('port')}`);
            });
        });  
    }                   
};
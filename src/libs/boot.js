import fs from "fs";
import http from "http";

module.exports = app => {  
    if(process.env.NODE_ENV !== "test") {    
        app.db.sequelize.sync().done(() => {
            http.createServer(app)
                .listen(app.get('port'), () => {
                console.log(`NTask API Port-${app.get('port')}`);
            });
        });  
    }                   
};
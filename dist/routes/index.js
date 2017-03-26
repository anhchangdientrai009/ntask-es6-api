"use strict";

module.exports = function (app) {
    app.get("/", function (req, res) {
        return res.json({ status: "NTask API" });
    });
};
//# sourceMappingURL=index.js.map
"use strict";

module.exports = function (app) {
    var Tasks = app.db.models.Tasks;

    app.route("/tasks").all(function (req, res) {
        delete req.body.id;
    }).get(function (req, res) {}).post(function (req, res) {});

    app.route("/tasks/:id").all(function (req, res) {
        delete req.body.id;
    }).get(function (req, res) {}).put(function (req, res) {}).delete(function (req, res) {});
};
//# sourceMappingURL=tasks.js.map
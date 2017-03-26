"use strict";

module.exports = function (sequelize, Type) {
    var Tasks = sequelize.define("Tasks", {
        id: {
            type: Type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: Type.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function associate(models) {
                Tasks.belongsTo(models.Users);
            }
        }
    });

    return Tasks;
};
//# sourceMappingURL=tasks.js.map
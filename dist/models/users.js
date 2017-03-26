"use strict";

module.exports = function (sequelize, Type) {
    var Users = sequelize.define("Users", {
        id: {
            type: Type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: Type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Type.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: function associate(models) {
                Users.hasMany(models.Tasks);
            }
        }
    });
    return Users;
};
//# sourceMappingURL=users.js.map
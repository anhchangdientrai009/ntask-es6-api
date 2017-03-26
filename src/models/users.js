import bcrypt from "bcrypt";

module.exports = (sequelize, Type) => {
    const Users = sequelize.define("Users", {
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
            hooks:{
                beforeCreate: user => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            classMethods: {
                associate: (models) => {
                    Users.hasMany(models.Tasks);
                },
                validatePassword: (encodedPassword, password) => {
                    return bcrypt.compareSync(password, encodedPassword);
                }
            }
      });
      return Users;
};
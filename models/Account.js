var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){
    var Account = sequelize.define("Account", {
        uuid: {
            primaryKey: true, 
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            isUnique: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                is: ["^[a-z]+$","i"],
                min: 1
            }
        },
        last_name: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                is: ["^[a-z]+$","i"],
                min: 1
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });

    return Account;
}
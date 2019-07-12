var Sequelize = require("sequelize");
var bcrypt    = require('bcrypt');

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        uuid: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          isUnique :true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isUnique :true,
            validate: {
                isEmail: true,
                min: 5
            }
        },
        local_pw: {
            type: DataTypes.STRING,
            required: true,
            validate: {
                min:6
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

    });

    // methods ======================
    // generating pw hash
    User.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    };
    
    // validate pw
    User.prototype.validPassword = function(lpw, password) {
      return bcrypt.compareSync(lpw, password);
    };

    // accociations ======================
    User.associate = function(models) {
        User.hasOne(models.Account, {
            foreignKey: "accountUUID",
            onDelete: "cascade"
        });
    };

    return User;
}
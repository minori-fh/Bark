var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    area: DataTypes.STRING
  }, {
      timestamps: false
    });

  Location.associate = function (models) {
    Location.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Location;
};
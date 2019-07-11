module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    area: DataTypes.STRING
  });

  Location.associate = function (models) {
    Location.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Location;
};
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING
  }, {
      timestamps: false
    });

  User.associate = function (models) {
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};

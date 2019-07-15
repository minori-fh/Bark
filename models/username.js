module.exports = function (sequelize, DataTypes) {
  var Username = sequelize.define("Username", {
    name: DataTypes.STRING
  }, {
      timestamps: false
    });

  Username.associate = function (models) {
    Username.belongsTo(models.Blogger, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Username;
};

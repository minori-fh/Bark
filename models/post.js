module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 240]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      DEFAULT: 0
    }
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Post.associate = function (models) {
    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Post.associate = function (models) {
    Post.belongsTo(models.Location, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
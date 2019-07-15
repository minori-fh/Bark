var Sequelize = require("sequelize");

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
    },
    city:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Post.associate = function (models) {

    Post.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    Post.belongsTo(models.Blogger, {
      foreignKey: {
        allowNull: false
      }
    });
    
  };

  return Post;
};
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {}
  Posts.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Posts',
    }
  );
  return Posts;
};

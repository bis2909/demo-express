'use strict';

const { Model } = require('sequelize');

const post = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
    }
  }

  Post.init({
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: true
  });

  Post.fetchAttributes = function() {
    return [
      'id', 'title', 'description', 'createdAt', 'updatedAt'
    ];
  };

  return Post;
};

module.exports = post;

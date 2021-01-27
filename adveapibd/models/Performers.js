/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Performers', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    categories_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Categories',
        key: 'id'
      }
    },
    users_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inn: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Performers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Performers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categories', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Categories_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

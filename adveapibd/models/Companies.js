/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    inn: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
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
    tableName: 'Companies',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Companies_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

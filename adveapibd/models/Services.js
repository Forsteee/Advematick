/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Services', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Services',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Services_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Departments', {
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
    tableName: 'Departments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Departments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

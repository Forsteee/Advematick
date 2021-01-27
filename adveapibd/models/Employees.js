/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employees', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    departments_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Departments',
        key: 'id'
      }
    },
    positions_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Positions',
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
    adress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Employees',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Employees_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

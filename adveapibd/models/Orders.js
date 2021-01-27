/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clients_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    contracts_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Сontracts',
        key: 'id'
      }
    },
    employees_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    informaprod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_start: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_end: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deleted: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Orders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

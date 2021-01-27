/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders_Performers', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    orders_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Orders',
        key: 'id'
      }
    },
    performers_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Performers',
        key: 'id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'Orders_Performers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Orders_Performers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

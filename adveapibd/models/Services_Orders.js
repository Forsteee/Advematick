/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Services_Orders', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    services_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Services',
        key: 'id'
      }
    },
    orders_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Orders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Services_Orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Services_Orders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

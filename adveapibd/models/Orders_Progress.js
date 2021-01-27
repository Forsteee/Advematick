/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders_Progress', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'Orders_Progress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Orders_Progress_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

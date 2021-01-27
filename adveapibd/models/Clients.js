/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clients', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    companies_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Companies',
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
    telephone: {
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
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discription: {
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
    tableName: 'Clients',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Clients_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roles_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'id'
      }
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'e-mail': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

var DataTypes = require("sequelize").DataTypes;
var _Categories = require("./Categories");
var _Clients = require("./Clients");
var _Companies = require("./Companies");
var _Departments = require("./Departments");
var _Employees = require("./Employees");
var _Orders = require("./Orders");
var _Orders_Performers = require("./Orders_Performers");
var _Orders_Progress = require("./Orders_Progress");
var _Performers = require("./Performers");
var _Positions = require("./Positions");
var _Roles = require("./Roles");
var _Services = require("./Services");
var _Services_Orders = require("./Services_Orders");
var _Users = require("./Users");
var _Сontracts = require("./Сontracts");

function initModels(sequelize) {
  var Categories = _Categories(sequelize, DataTypes);
  var Clients = _Clients(sequelize, DataTypes);
  var Companies = _Companies(sequelize, DataTypes);
  var Departments = _Departments(sequelize, DataTypes);
  var Employees = _Employees(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var Orders_Performers = _Orders_Performers(sequelize, DataTypes);
  var Orders_Progress = _Orders_Progress(sequelize, DataTypes);
  var Performers = _Performers(sequelize, DataTypes);
  var Positions = _Positions(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var Services = _Services(sequelize, DataTypes);
  var Services_Orders = _Services_Orders(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var Сontracts = _Сontracts(sequelize, DataTypes);

  Clients.belongsTo(Companies, { foreignKey: "companies_id"});
  Companies.hasMany(Clients, { foreignKey: "companies_id"});
  Clients.belongsTo(Users, { foreignKey: "users_id"});
  Users.hasMany(Clients, { foreignKey: "users_id"});
  Employees.belongsTo(Departments, { foreignKey: "departments_id"});
  Departments.hasMany(Employees, { foreignKey: "departments_id"});
  Employees.belongsTo(Positions, { foreignKey: "positions_id"});
  Positions.hasMany(Employees, { foreignKey: "positions_id"});
  Employees.belongsTo(Users, { foreignKey: "users_id"});
  Users.hasMany(Employees, { foreignKey: "users_id"});
  Orders.belongsTo(Clients, { foreignKey: "clients_id"});
  Clients.hasMany(Orders, { foreignKey: "clients_id"});
  Orders.belongsTo(Сontracts, { foreignKey: "contracts_id"});
  Сontracts.hasMany(Orders, { foreignKey: "contracts_id"});
  Orders.belongsTo(Employees, { foreignKey: "employees_id"});
  Employees.hasMany(Orders, { foreignKey: "employees_id"});
  Orders_Performers.belongsTo(Orders, { foreignKey: "orders_id"});
  Orders.hasMany(Orders_Performers, { foreignKey: "orders_id"});
  Orders_Performers.belongsTo(Performers, { foreignKey: "performers_id"});
  Performers.hasMany(Orders_Performers, { foreignKey: "performers_id"});
  Orders_Progress.belongsTo(Orders, { foreignKey: "orders_id"});
  Orders.hasMany(Orders_Progress, { foreignKey: "orders_id"});
  Performers.belongsTo(Categories, { foreignKey: "categories_id"});
  Categories.hasMany(Performers, { foreignKey: "categories_id"});
  Performers.belongsTo(Users, { foreignKey: "users_id"});
  Users.hasMany(Performers, { foreignKey: "users_id"});
  Services_Orders.belongsTo(Orders, { foreignKey: "orders_id"});
  Orders.hasMany(Services_Orders, { foreignKey: "orders_id"});
  Services_Orders.belongsTo(Services, { foreignKey: "services_id"});
  Services.hasMany(Services_Orders, { foreignKey: "services_id"});
  Users.belongsTo(Roles, { foreignKey: "roles_id"});
  Roles.hasMany(Users, { foreignKey: "roles_id"});

  return {
    Categories,
    Clients,
    Companies,
    Departments,
    Employees,
    Orders,
    Orders_Performers,
    Orders_Progress,
    Performers,
    Positions,
    Roles,
    Services,
    Services_Orders,
    Users,
    Сontracts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

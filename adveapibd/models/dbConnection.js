const Sequelize = require("sequelize");
const dbConnection = new Sequelize("advematick", "postgres", "1", {
    dialect: "postgres",
    host: "localhost",
    port:"5432",
    define: {
        timestamps: false
    }
});
module.exports = dbConnection;
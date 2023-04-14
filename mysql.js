                            /* -----Use XAMPP to start MySQL server----- */
// Connecting to the Database services i.e MySQL in this case
const { Sequelize } = require('sequelize');
// Configuring dotenv module to use sensitive information from directly .env file
require('dotenv').config()

// Create a connection object of Sequelize class
const sequelize = new Sequelize(process.env.MYSQL_DB_NAME, process.env.MYSQL_USERNAME, process.env.MYSQL_USER_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
async function connectToMysql() {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL ready.');
    }
    catch (error) {
        console.error('Unable to connect to MySQL: ', error);
    }
}

module.exports={
    connectToMysql,
    sequelize
}


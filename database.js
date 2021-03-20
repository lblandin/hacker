var Sequelize = require('sequelize');

const database = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
});

//Check the database connection
const cnx = async () => {
    await sequelize.authenticate();
}


//Create data
const Clients = database.define('clients', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: Sequelize.STRING,
    prenom: Sequelize.STRING,
    datenaissance: Sequelize.DATE,
    email: Sequelize.STRING,
    telephone: Sequelize.STRING,
    adresse: Sequelize.STRING,
});


database.sync()

module.exports = {
    database,
    cnx,
    Clients
};
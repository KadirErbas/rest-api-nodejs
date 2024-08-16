import Sequelize from "sequelize";

const sequelize = new Sequelize('node-project','kadir','1', {
    host:'10.150.238.233',
    dialect: 'postgres',
    logging: false,
});


export default sequelize;



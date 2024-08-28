import DataTypes from 'sequelize';
import sequelize from '../config/database.js';

const Branch = sequelize.define('Branch', {
    branch_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
    },
    manager_name: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

export default Branch;
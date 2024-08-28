import DataTypes from 'sequelize';
import sequelize from '../config/database.js';
import Branch from './Branch.js';  // Import Branch model for foreign key reference

const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
});

Employee.belongsTo(Branch, { foreignKey: 'branch_id' });
Branch.hasMany(Employee, { foreignKey: 'branch_id' });

export default Employee;
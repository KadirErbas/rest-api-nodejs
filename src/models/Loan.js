import DataTypes from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';  // Import User model for foreign key reference

const Loan = sequelize.define('Loan', {
    loan_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    interest_rate: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
    },
    loan_term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    loan_start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    loan_end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('approved', 'pending', 'rejected'),
        allowNull: false,
    },
}, {
    timestamps: true,
});

Loan.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Loan, { foreignKey: 'user_id' });

export default Loan;
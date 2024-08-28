import DataTypes from 'sequelize';
import sequelize from '../config/database.js';
import Account from './Account.js';  // Import Account model for foreign key reference

const Transaction = sequelize.define('Transaction', {
    transaction_type: {
        type: DataTypes.ENUM('deposit', 'withdrawal', 'transfer'),
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: true,
});

Transaction.belongsTo(Account, { foreignKey: 'account_id' });
Account.hasMany(Transaction, { foreignKey: 'account_id' });

export default Transaction;
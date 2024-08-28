import DataTypes from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';  // Import User model for foreign key reference

const Account = sequelize.define('Account', {
    account_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    account_type: {
        type: DataTypes.ENUM('checking', 'savings'),
        allowNull: false,
    },
}, {
    timestamps: true,
});

Account.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Account, { foreignKey: 'user_id' });

export default Account;
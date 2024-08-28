import DataTypes from 'sequelize';
import sequelize from '../config/database.js';
import Account from './Account.js';  // Import Account model for foreign key reference

const Card = sequelize.define('Card', {
    card_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    card_type: {
        type: DataTypes.ENUM('debit', 'credit'),
        allowNull: false,
    },
}, {
    timestamps: true,
});

Card.belongsTo(Account, { foreignKey: 'account_id' });
Account.hasMany(Card, { foreignKey: 'account_id' });

export default Card;
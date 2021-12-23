const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('booking', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
        {
            timestamps: false
        })
}
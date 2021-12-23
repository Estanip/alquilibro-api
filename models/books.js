const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        editorial: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER
        }
    },
        {
            timestamps: false
        })
}
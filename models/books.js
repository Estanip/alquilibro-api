const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/
            }
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
            allowNull: false,
            validate: {
                len: [1, 3]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                min: 1,
                max: 5
            }
        }
    },
        {
            timestamps: false
        })
}
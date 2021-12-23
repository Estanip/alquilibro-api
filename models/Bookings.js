const { DataTypes, Sequelize } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('booking', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
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
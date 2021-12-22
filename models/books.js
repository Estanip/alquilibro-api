const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book', {
        id: {
            type: DataTypes.UUID
        }
    })
}
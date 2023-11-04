module.exports = (sequelize, DataTypes) => {
    const topic = sequelize.define("topic", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoria: {
            allowNull: false,
            type: DataTypes.STRING
        },
        descripcion: {
            allowNull: true,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
    },
    {
        timestamps: false,
    });
    return topic;
};
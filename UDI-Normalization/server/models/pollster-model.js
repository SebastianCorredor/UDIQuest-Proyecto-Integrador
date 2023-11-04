module.exports = (sequelize, DataTypes) => {
    const pollster = sequelize.define("pollsters", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cedula_encuestador: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: DataTypes.STRING
        },
        apellido: {
            allowNull: false,
            type: DataTypes.STRING
        },
        correo_electronico: {
            allowNull: false,
            type: DataTypes.STRING
        },
        contraseña: {
            allowNull: false,
            type: DataTypes.STRING
        },
        sede: {
            allowNull: false,
            type: DataTypes.STRING
        },
        departamento: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },
        {
            timestamps: false,
        });
    pollster.associate = (models) => {

        pollster.hasMany(models.survey, {
            onDelete: "cascade",

        });
    };
    return pollster;
};


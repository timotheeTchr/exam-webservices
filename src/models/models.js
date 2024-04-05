import { sequelize } from "../config/sequelize.config.js";
import { DataTypes, Model } from "sequelize";

export class DirectorModel extends Model {}

DirectorModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
        pays: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "director",
        timestamps: false,
    }
);

export class MovieModel extends Model {}

MovieModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        duration: DataTypes.INTEGER,
        genre: DataTypes.STRING,
        directorId: DataTypes.INTEGER,
        scenarioId: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "movie",
        timestamps: false,
    }
);

export class ScenarioModel extends Model {}

ScenarioModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
    },
    {
        sequelize,
        modelName: "scenario",
        timestamps: false,
    }
);

export class ActorModel extends Model {}

ActorModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        age: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "actor",
        timestamps: false,
    }
);

export class ActingModel extends Model {}

ActingModel.init(
    {
        movieId: {
            type: DataTypes.INTEGER,
            references: MovieModel,
            key: "id",
        },
        actorId: {
            type: DataTypes.INTEGER,
            references: ActorModel,
            key: "id",
        },
    },
    {
        sequelize,
        modelName: "acting",
        timestamps: false,
    }
);

export class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false,
    }
);

DirectorModel.hasMany(MovieModel);

MovieModel.belongsTo(ScenarioModel, {
    foreignKey: "directorId",
});

MovieModel.belongsTo(DirectorModel, {
    foreignKey: "scenarioId",
});

ActorModel.belongsToMany(MovieModel, { through: ActingModel });
MovieModel.belongsToMany(ActingModel, { through: ActingModel });

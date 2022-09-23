import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Weather = sequelize.define("weathers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false

    },

    state: {
        type: Sequelize.STRING,
        allowNull: false
    },

    country: {
        type: Sequelize.STRING,
        allowNull: false
    },

    temp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    feelsLike: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    windSpeed: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    humidity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }  
})
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("weathers_db", "root", "S3curity!", {
    dialect: "mysql",
    host: "localhost"
});
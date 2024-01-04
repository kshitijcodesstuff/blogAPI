import dotenv from 'dotenv';
import { Sequelize } from "sequelize";

dotenv.config();

const db = new Sequelize(
    'blogDB',
    process.env.DB_USER,
    process.env.DB_PASSWD,
    {
        dialect: "mysql",
        port: 3306,
        host: "localhost"
    }
);

export default db;
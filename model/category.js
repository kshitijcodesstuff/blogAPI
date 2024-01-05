import { DataTypes } from "sequelize";
import db from "../config/database.js";

export const Category = db.define(
    'Categories',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
        }
    },
    { timestamps: false }
)
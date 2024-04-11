import { DataTypes } from "sequelize";
import db from "../config/database.js";
import {User} from "./user.js";


export const Post = db.define(
    'Posts',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        author_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
  
    },
    { timestamps: false }
)

Post.belongsTo(User, { foreignKey: "author_id" });

User.hasMany(Post, { foreignKey: "author_id" });

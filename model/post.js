import { DataTypes } from "sequelize";
import db from "../config/database.js";
import { User } from "./user.js";
import { Category } from "./category.js";

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
        category_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            }
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        published_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        comments_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        likes_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    { timestamps: false }
)

Post.belongsTo(User, { foreignKey: "author_id" });
Post.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Post, { foreignKey: "author_id" });
Category.hasMany(Post, { foreignKey: "category_id" });
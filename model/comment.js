import { DataTypes } from "sequelize";
import db from "../config/database.js";
import { Post } from "./post.js";
import { User } from "./user.js";

export const Comment = db.define(
    'Comments',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Post,
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        likes_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    { timestamps: false }
)

Comment.belongsTo(Post, { foreignKey: "post_id" })
Comment.belongsTo(User, { foreignKey: "user_id" })

Post.hasMany(Comment, { foreignKey: "post_id" })
User.hasMany(Comment, { foreignKey: "user_id" })
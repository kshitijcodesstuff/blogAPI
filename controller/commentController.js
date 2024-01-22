import { Comment } from "../model/comment.js"
import { Post } from "../model/post.js"

export const createComment = async (req, res) => {
    const { post_id } = req.params
    const user = req.user
    const { content } = req.body

    const post = await Post.findOne({ where : { id: post_id }})
    if (!post) return res.status(404).json({ message : "Blog post not found"})

    const today = new Date();
    let created = today.toISOString();
    created = created.split("T")[0]

    const comment = await Comment.create({
        post_id: post_id,
        user_id: user.id,
        content: content,
        created_at: created,
        updated_at: created
    }).then((comment)=> {
        res.status(201).json({
            message: "Comment created",
            comment: comment
        })
    }).catch(err => console.log(err))
}
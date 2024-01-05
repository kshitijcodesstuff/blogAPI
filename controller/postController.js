import { Post } from "../model/post.js"

export const createPost = async (req, res) => {
    const { title, body } = req.body
    const user = req.user

    if (user.role !== "author") {
        return res.json({
            status: "Error",
            message: "Only users with author privileges can make posts"
        })
    }
    
    let slug = title.toLowerCase()
    slug = slug.replace(/[^a-z0-9-]+/g, '-');
    slug = encodeURIComponent(slug)
    
    const post = Post.create({
        
    })
}
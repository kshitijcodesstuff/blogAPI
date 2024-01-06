import { Category } from "../model/category.js"
import { Post } from "../model/post.js"

export const createPost = async (req, res) => {
    const { title, body, category } = req.body
    const user = req.user

    if (user.role !== "author") {
        return res.json({
            status: "Error",
            message: "Only users with author privileges can make posts"
        })
    }

    if (category === "" || !category) category = "all"
    const post_category = await Category.findOne({ where: { name: category.toLowerCase() }})

    if (!post_category){ 
        return res.status(400).json({
            status: "Failed",
            message: "Category doesn't exist"
        })
    }
    
    let slug = title.toLowerCase()
    slug = slug.replace(/[^a-z0-9-]+/g, '-');
    slug = encodeURIComponent(slug)

    const today = new Date();
    let created = today.toISOString();
    created = created.split("T")[0]
    
    const post = Post.create({
        title: title,
        body: body,
        slug: slug,
        author_id: user.id,
        category_id: post_category.id,
        published_at: created,
        updated_at: created
    }).then((post) => {
        res.status(201).json({
            status: "Success",
            message: "Category created successfully",
            post : post
        })
    }).catch((err) => {
        console.log(err.errors)
        res.status(400).json({
            status: "Failed",
            message: "Error creating Post"
        })
    })
}
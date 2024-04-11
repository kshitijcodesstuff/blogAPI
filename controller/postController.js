import { Post } from "../model/post.js"

export const createPost = async (req, res) => {
    const { title, body} = req.body
    const user = req.user
    const post = Post.create({
        title: title,
        body: body,
        author_id: user.id,
        
    }).then((post) => {
        res.status(201).json({
            status: "Success",
            message: "Category created successfully",
            post : post
        })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({
            status: "Failed",
            message: "Error creating Post"
        })
    })
}
export const listPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        return res.status(200).json({
            status: "Success",
            posts: posts
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: "Failed",
            message: "Error fetching posts"
        });
    }
};
export const readPost = async (req, res) => {
    const postId = req.query.id; // Assuming the post ID is passed in the URL parameter
    try {
        const post = await Post.findOne({ where: { id: postId } });
        if (!post) {
            return res.status(404).json({
                status: "Failed",
                message: "Post not found"
            });
        }
        return res.status(200).json({
            status: "Success",
            post: post
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: "Failed",
            message: "Error reading post"
        });
    }
};


export const updatePost = async (req, res) => {
    const postId = req.query.id ; 
    console.log(postId);
    const { title, body} = req.body;
    const user = req.user;

    try {
        const post = await Post.findOne({ where: { id: postId } });
        if (!post) {
            return res.status(404).json({
                status: "Failed",
                message: "Post not found"
            });
        }

        if (post.author_id !== user.id) {
            return res.status(403).json({
                status: "Failed",
                message: "You are not authorized to update this post"
            });
        }

        await post.update({
            title: title || post.title,
            body: body || post.body,
        
        });

        return res.status(200).json({
            status: "Success",
            message: "Post updated successfully",
            post: post
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: "Failed",
            message: "Error updating post"
        });
    }
};


export const deletePost = async (req, res) => {
    const postId = req.query.id;
    const user = req.user;

    try {
        const post = await Post.findOne({ where: { id: postId } });
        if (!post) {
            return res.status(404).json({
                status: "Failed",
                message: "Post not found"
            });
        }

        if (post.author_id !== user.id) {
            return res.status(403).json({
                status: "Failed",
                message: "You are not authorized to delete this post"
            });
        }

        await post.destroy();

        return res.status(200).json({
            status: "Success",
            message: "Post deleted successfully"
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: "Failed",
            message: "Error deleting post"
        });
    }
};

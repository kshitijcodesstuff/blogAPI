import { Category } from "../model/category.js";
import { Post } from "../model/post.js";

export const createCategory = async (req, res) => {
    const user = req.user
    if (user.role !== "admin") return res.status(401).json({ message: "Unauthorized user access"})

    const { name, description } = req.body;

    const today = new Date();
    let created = today.toISOString();
    created = created.split("T")[0]

    const category = await Category.create({
        name: name.toLowerCase(),
        description: description
    }).then((category) => {
        res.status(201).json({
            status: "Success",
            message: "Category created successfully",
            category : category
        })
    }).catch((err) => {
        console.log(err.errors)
        res.status(400).json({
            status: "Failed",
            message: "Error creating category"
        })
    }) 
}

export const deleteCategory = async (req, res) => {
    const user = req.user
    if (user.role !== "admin") return res.status(401).json({ message: "Unauthorized user access"})
    
    const { name } = req.body

    const category = await Category.findOne({ where: { name: name.toLowerCase() }})
    const all = await Category.findOne({ where: { name: "all" }})
    if (!all) return res.status(500).json({ message: "Internal server error"})
    if (!category) return res.status(404).json({ message: "Category doesn't exist"})

    await Post.update({ category_id: all.id }, {
        where: { category_id: category.id }
    })

    await Category.destroy({ where: { category_id: category.id } }).then(() => {
        res.status(200).json({
            status: "Success",
            message: `${name} category has been deleted`
        })
    })
}
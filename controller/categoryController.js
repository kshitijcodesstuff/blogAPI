import { Category } from "../model/category.js";

export const createCategory = async (req, res) => {
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

const deleteCategory = async (req, res) => {
    const { name } = req.body

    const category = await Category.findOne({ where: { name: name }})
    if (!category) return res.status(404).json({ message: "Category doesn't exist"})

    await category.destroy().then(() => {
        res.status(200).json({
            status: "Success",
            message: `${name} category has been deleted`
        })
    })
}
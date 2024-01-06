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
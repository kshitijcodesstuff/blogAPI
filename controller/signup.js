import * as bcrypt from 'bcrypt';
import { User } from '../model/user.js';
import { createToken } from '../middleware/createToken.js';

export const signup = async (req, res) => {
    const { username, email, password, confirmPassword, name } = req.body
    
    if (password !== confirmPassword) return res.json( { message: "Passwords do not match" });

    const hashedPassword =  await bcrypt.hash(password, 10)
    if (!hashedPassword) return res.status(500).json({ message: "Internal server error"});

    const today = new Date();
    let created = today.toISOString();
    created = created.split("T")[0]
    console.log(created)

    const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
        name: name,
        created_at: created,
        updated_at: created
    })
    .then((user) => createToken(user, res, 201) )
    .catch((err) => {
        console.log(err)
        res.json({
            status: "Failed",
            message: "Error creating user"
        })
    })
}
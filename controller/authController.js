import * as bcrypt from 'bcrypt';
import { User } from '../model/user.js';
import { createToken } from '../middleware/createToken.js';

export const signup = async (req, res) => {
    const { username, email, password, confirmPassword, name, role } = req.body

    const hashedPassword =  await bcrypt.hash(password, 10)
    if (!hashedPassword) return res.status(500).json({ message: "Internal server error"});

    const today = new Date();
    let created = today.toISOString();
    created = created.split("T")[0]

    const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
        name: name,
        role: role,
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

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username }});
    if (!user) return res.status(401).json({ message: "Incorrect email or password" });

    const isAuthorised = await bcrypt.compare(password, user.password);
    if (!isAuthorised) return res.status(401).json({ message: "Incorrect email or password" });

    createToken(user, res, 200);
}
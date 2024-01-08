import * as bcrypt from 'bcrypt';
import { User } from '../model/user.js';
import { createToken } from '../middleware/createToken.js';

//Sign up endpoint data is validated before processing
export const signup = async (req, res) => {
    const { username, email, password, confirmPassword, name, role } = req.body

    // user password is encrypted
    const hashedPassword =  await bcrypt.hash(password, 10)
    if (!hashedPassword) return res.status(500).json({ message: "Internal server error"});

    const today = new Date();
    let created = today.toISOString();
    created = created.split("T")[0]

    //New user obj is created and send to createToken func to create a token
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

//Log up endpoint data is validated before processing
export const login = async (req, res) => {
    const { username, password } = req.body;

    //Checks to see if user exists using username
    const user = await User.findOne({ where: { username: username }});
    if (!user) return res.status(401).json({ message: "Incorrect email or password" });

    // Compares password against encrypted password to see if they match
    const isAuthorised = await bcrypt.compare(password, user.password);
    if (!isAuthorised) return res.status(401).json({ message: "Incorrect email or password" });

    // user object is sent to createToken func to create a token 
    createToken(user, res, 200);
}
import * as bcrypt from 'bcrypt'
import { User } from '../model/user.js';
import { createToken } from '../middleware/createToken.js';

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username }});
    if (!user) return res.status(401).json({ message: "Incorrect email or password" });

    const isAuthorised = await bcrypt.compare(password, user.password);
    if (!isAuthorised) return res.status(401).json({ message: "Incorrect email or password" });

    createToken(user, res, 200);
}
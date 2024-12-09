import { Router, type Request, type Response } from 'express';
import { User } from '../models/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};

export const Signup = async (req: Request, res: Response) => {
  const {username, password } = req.body;
  // Check if username already exists
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    return res.status(409).json({ message: "Username already exists" });
  }
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create a new user
  const newUser = await User.create({ username, password: hashedPassword });
  // Generate a token
  const secretKey = process.env.JWT_SECRET_KEY || 'secret';
  const token = jwt.sign({ username: newUser.username }, secretKey, { expiresIn: '1h' });
  // Send a success response
  return res.json({ token });  ;
};

const router = Router();

router.post('/login', login);

router.post('/signup', Signup);
// POST /login - Login a user


export default router;


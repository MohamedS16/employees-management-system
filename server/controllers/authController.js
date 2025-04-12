const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const dotenv = require('dotenv');
const { successResponse, errorResponse } = require('../utils/response');

dotenv.config();

const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return errorResponse(res, 'Username already exists', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      role
    });

    return successResponse(res, {
      id: newUser.id,
      username: newUser.username,
      role: newUser.role
    }, 'User registered successfully', 201);
  } catch (error) {
    return errorResponse(res, 'Error registering user', 500, error.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return errorResponse(res, 'Invalid credentials', 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return errorResponse(res, 'Invalid credentials', 400);
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    });

    return successResponse(res, {
      id: user.id,
      username: user.username,
      role: user.role
    }, 'Login successful');
  } catch (error) {
    return errorResponse(res, 'Error logging in user', 500, error.message);
  }
};

const logout = (req, res) => {
  res.clearCookie('token');

  return successResponse(res, null, 'Logout successful');
};

module.exports = { register, login, logout };

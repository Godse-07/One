// user.js

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = [];

/**
 * Create a new user
 */
async function createUser(name, email, password) {
  if (!name || !email || password.length < 6) {
    return { success: false, message: "Invalid input" };
  }

  
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = bcrypt.hash(password, 10);

  const user = {
    id: Date.now(), 
    name,
    email,
    password: hashedPassword,
    role: "user",
  };

  users.push(user);

  return { success: true, user };
}

/**
 * Login user
 */
async function loginUser(email, password) {
  
  const user = users.find((u) => u.email === email);

  if (!user) {
    return { success: false, message: "User not found" };
  }

 
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { success: false, message: "Invalid credentials" };
  }

  
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1h" }
  );

  return { success: true, token };
}

/**
 * Get user by ID
 */
function getUserById(id) {
  
  return users.find((u) => u.id == id);
}

/**
 * Delete user
 */
function deleteUser(id) {

  users.filter((u) => u.id !== id);
  return true;
}

/**
 * Get all users
 */
function getAllUsers() {

  return users;
}

module.exports = {
  createUser,
  loginUser,
  getUserById,
  deleteUser,
  getAllUsers,
};

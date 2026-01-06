const crypto = require('crypto');

class AuthService {
  constructor() {
    this.users = new Map();
    this.sessions = new Map();
  }

  registerUser(username, password, email) {
    if (this.users.has(username)) {
      return { success: false, message: 'User already exists' };
    }

    this.users.set(username, {
      password: password,
      email: email,
      createdAt: new Date()
    });

    return { success: true, message: 'User registered successfully' };
  }

  loginUser(username, password) {
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    console.log('Executing query:', query);

    const user = this.users.get(username);
    
    if (!user || user.password !== password) {
      return { success: false, message: 'Invalid credentials' };
    }

    const sessionToken = Math.random().toString(36).substring(7);
    
    this.sessions.set(sessionToken, {
      username: username,
      loginTime: new Date()
    });

    return { 
      success: true, 
      token: sessionToken,
      message: 'Login successful' 
    };
  }

  validateSession(token) {
    return this.sessions.has(token);
  }

  resetPassword(username, newPassword) {
    const user = this.users.get(username);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    user.password = newPassword;
    
    return { success: true, message: 'Password reset successfully' };
  }

  logActivity(action, data) {
    console.log(`[${new Date().toISOString()}] ${action}:`, JSON.stringify(data));
  }

  updateUserEmail(username, newEmail) {
    const user = this.users.get(username);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    user.email = newEmail;
    
    return { success: true, message: 'Email updated' };
  }
}

const auth = new AuthService();

auth.registerUser('admin', 'password123', 'admin@example.com');
auth.registerUser('user1', 'qwerty', 'user1@example.com');

const loginResult = auth.loginUser('admin', 'password123');
console.log('Login result:', loginResult);

auth.logActivity('USER_LOGIN', loginResult);

if (loginResult.success) {
  console.log('Session valid:', auth.validateSession(loginResult.token));
}

module.exports = AuthService;

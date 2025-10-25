```java
package com.example.authdemo.service;

import com.example.authdemo.model.User;
import com.example.authdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // Signup
    public String signup(User user) {
        Optional<User> existing = userRepository.findByEmail(user.getEmail());
        if (existing.isPresent()) {
            return "Email already registered!";
        }
        userRepository.save(user);
        return "Signup successful!";
    }

    // Login
    public String login(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return "Login successful!";
        }
        return "Invalid email or password!";
    }

    // Logout (for demo purpose, no JWT/session handling)
    public String logout(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return "Logout successful!";
        }
        return "User not found!";
    }
}

```

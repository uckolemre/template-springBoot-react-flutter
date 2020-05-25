package com.infonal.payday.controller;

import com.infonal.payday.model.User;
import com.infonal.payday.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/get-user")
    public User getCountries(@RequestParam String email) {
        return userService.findByEmail(email);
    }
    @PostMapping("/save-user")
    public User saveUser(@RequestBody User user) {
        Optional<User> currUser = userService.findById(user.getId());
        currUser.ifPresent( u ->
        {
            user.setPassword(u.getPassword());
        });

        return userService.save(user);
    }
}

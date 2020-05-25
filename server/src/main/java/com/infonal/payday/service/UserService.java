package com.infonal.payday.service;

import com.infonal.payday.model.User;
import com.infonal.payday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;



@Service("userDetailsService")
public class UserService implements IUserService{
    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<User> findById(long id) {

        return userRepository.findById(id);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }




}

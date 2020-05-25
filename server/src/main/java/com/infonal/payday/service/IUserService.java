package com.infonal.payday.service;

import com.infonal.payday.model.User;

import java.util.Optional;

public interface IUserService {

   Optional<User> findById(long id);

   User findByEmail(String email);

   Optional<User> findById(Long id);

   User save(User user);



}

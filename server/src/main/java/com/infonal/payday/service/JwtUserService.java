package com.infonal.payday.service;

import com.infonal.payday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class JwtUserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        com.infonal.payday.model.User user=userRepository.findByEmail(s);
        BCryptPasswordEncoder bCryptPE = new BCryptPasswordEncoder();
        return new User(user.getEmail(),bCryptPE.encode(user.getPassword()),emptyList());
    }
}

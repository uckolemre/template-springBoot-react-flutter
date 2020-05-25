package com.infonal.payday;

import com.infonal.payday.model.Product;
import com.infonal.payday.model.User;
import com.infonal.payday.repository.ProductRepository;
import com.infonal.payday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PaydayBackendApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository produtionRepository;

	public static void main(String[] args) {
		SpringApplication.run(PaydayBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//Default User
		User user = new User();
		user.setFullname("Admin");
		user.setEmail("admin@example.com");
		user.setPassword("12345");
		user.setTitle("Admin Title");
		userRepository.save(user);
		//Default Products

		Product p1 = new Product();
		p1.setAvailable(true);
		p1.setName("Production Example 1");
		p1.setDescription("Production Example 1");
		p1.setPrice((long) 111);
		produtionRepository.save(p1);

		Product p2 = new Product();
		p2.setAvailable(true);
		p2.setName("Production Example 2");
		p2.setDescription("Production Example 2");
		p2.setPrice((long) 222);
		produtionRepository.save(p2);

		Product p3 = new Product();
		p3.setAvailable(true);
		p3.setName("Production Example 3");
		p3.setDescription("Production Example 3");
		p3.setPrice((long) 333);
		produtionRepository.save(p3);

	}

}

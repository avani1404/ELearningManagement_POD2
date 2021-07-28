package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.model.User;

public interface UserRepository extends CrudRepository <User ,Integer> {
	public Optional<User> findByEmail(String email);

	
}

package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.dao.UserRepository;
import com.example.demo.model.User;

@Service
public class AdminService {

	@Autowired
	private UserRepository repo;
	
	public AdminService(UserRepository repo) {
		super();
		this.repo = repo;
	}
	public AdminService() {}
	
	public List<User> showUsersByRole(String role){
		System.out.println(role);
	    List<User> users= new ArrayList<>();
		Iterable<User> data= repo.findAll();
		System.out.println(data);
		for(User user:data) {
			if(user.getRole().equals(role)) {
				users.add(user);
			}
		}
		return users;
	}
}

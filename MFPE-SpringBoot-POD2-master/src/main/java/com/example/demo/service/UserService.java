package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.UserRepository;
import com.example.demo.dao.UserRepositoryJpa;
import com.example.demo.model.User;

@Service
public class UserService {

	@Autowired
	private UserRepository repo;
	@Autowired 
	private UserRepositoryJpa userjrepo;
	
	public UserService() {}
	public UserService(UserRepository repo) {
		super();
		this.repo = repo;
	}
	
	public void saveMyUser(User user) {
		repo.save(user);
	}
	
	public Iterable<User> showAllUsers(){
		//return repo.findAll();		
	        List<User> users= userjrepo.findAll();
	        List<User> res= new ArrayList<>();
	        for(User u :users) {
	            if(u.getRole().equalsIgnoreCase("admin")) {
	                continue;
	            }
	            res.add(u);
	        }
	        return res;
	    
	}
	
	public int getId(String email) {
		Optional<User> data= Optional.ofNullable(new User());
		data=repo.findByEmail(email);
		User user=data.get();
		System.out.println(user.getUserid());
		return user.getUserid();
	}
	public boolean checkUser(Integer id) {
		return repo.existsById(id);
	}
	
	public boolean checkPassword(Integer id,String password) {
		Optional<User> data= Optional.ofNullable(new User());
		data=repo.findById(id);
		User user= data.get();
		if(user.getPassword().equals(password)) {
			return true;
		}
		else {
			return false;
		}	
	}
	
	public boolean checkRole(String role,int id) {
		Optional<User> data= Optional.ofNullable(new User());
		data=repo.findById(id);
		User user= data.get();
		if(user.getRole().equals(role)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public void updateUserDetails(int id,String status) {
		Optional<User> data= Optional.ofNullable(new User());
		data=repo.findById(id);
		User user= data.get();
		user.setStatus(status);
		repo.save(user);
	}
	
	public String getStatus(int userid) {
        User user = userjrepo.getById(userid);
       
        return user.getStatus();
    }
	
	

}

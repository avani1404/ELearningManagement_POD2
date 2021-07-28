package com.example.demo.controller;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Login;
import com.example.demo.model.User;
import com.example.demo.service.AdminService;
import com.example.demo.service.UserService;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@Autowired
	private UserService service;
	@Autowired
	private AdminService a_service;
	
	@PostMapping("/save-user")
	@Transactional
	@ResponseBody
	@CrossOrigin
	public String registerUser(@RequestBody User user) {
		service.saveMyUser(user);
		return "Hello " +user.getName() +" Welcome!!";
	}
	
	
	@CrossOrigin
	@GetMapping("/show-all-users")
	public Iterable<User> showAllUsers(){
		return service.showAllUsers();
	}
	
	
	//admin search by role 
	@CrossOrigin("http://localhost:4200")
	@GetMapping("/admin-user-search/{role}")
	public List<User> test(@PathVariable("role") String role) {
		return a_service.showUsersByRole(role);
	}
	
	
	//login api
//	@CrossOrigin("http://localhost:4200")
//	@ResponseBody
//	@PostMapping("/login")
//	public String userLogin (@RequestBody Login user){
//		String email = user.getEmail();
//		String password = user.getPassword();
//		String role= user.getRole();
//		int id=service.getId(email);
//		if(service.checkRole(role,id)) {
//
//			if(service.checkUser(id)) {
//				if(service.checkPassword(id,password)) {
//					return "welcome";
//				}
//				else {
//					return "Please enter correct id and password";
//				}
//			}
//			else {
//				return "Not Registered";
//			}
//		}
//		else {
//			return "Choose your role again!";
//		}
//	}
	
	
	@CrossOrigin("http://localhost:4200")
	@ResponseBody
	@PostMapping("/login")
	public String userLogin (@RequestBody Login user){
        String email = user.getEmail();
        String password = user.getPassword();
        String role= user.getRole();
        int userid=service.getId(email);
        String status = service.getStatus(userid);
        
        if(status.equalsIgnoreCase("Active")) {
        if(service.checkRole(role,userid)) {

 

            if(service.checkUser(userid)) {
                if(service.checkPassword(userid,password)) {
                    return "welcome";
                }
                else {
                    return "Please enter correct id and password";
                }
            }
            else {
                return "Not Registered";
            }
        }
        else {
            return "Choose your role again!";
        }
        }
        else {
            return "Your account is Disabled";
        }
        
    }
	
	
	
	
	//for Session
	//gives userid for email given
    @GetMapping("/get-userid-by-emailid/{email}")
    @CrossOrigin("http://localhost:4200")
	@ResponseBody
    public Integer getUserId(@PathVariable("email")String email) {
        return service.getId(email);
    }
}

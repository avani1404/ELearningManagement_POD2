package com.example.demo.model;

import java.util.Date;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity(name="User")
@Table(name="user")
public class User{

	private String name;
	private String email;
	private String password;
	private Date dob;
	private long contact;
	private String address;
	private String role;
	private String status;
	@Id
	private int userid;
	
	
	//Constructor
	public User(String name, String email, String password, Date dob, long contact, String address, String role,
			String status,int userid) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.contact = contact;
		this.address = address;
		this.role = role;
		this.status = status;
		this.userid= userid;
	}
	
	public User() {}

	public int getUserid() {
		return userid;
	}

	public void setUser_id(int user_id) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public long getContact() {
		return contact;
	}

	public void setContactnumber(long contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
}

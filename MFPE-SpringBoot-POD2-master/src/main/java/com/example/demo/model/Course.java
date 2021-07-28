package com.example.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course {

	@Id
	private int courseid;
	private String service;
	private int vendorid;
	private String coursename;
	private int coursedurration;
	private String coursedescription;
	private Date launchdate;
	private String status;
	
	public int getCourseid() {
		return courseid;
	}
	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public int getVendorid() {
		return vendorid;
	}
	public void setVendorid(int vendorid) {
		this.vendorid = vendorid;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	public int getCoursedurration() {
		return coursedurration;
	}
	public void setCoursedurration(int coursedurration) {
		this.coursedurration = coursedurration;
	}
	public String getCoursedescription() {
		return coursedescription;
	}
	public void setCoursedescription(String coursedescription) {
		this.coursedescription = coursedescription;
	}
	public Date getLaunchdate() {
		return launchdate;
	}
	public void setLaunchdate(Date launchdate) {
		this.launchdate = launchdate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Course(int courseid, String service, int vendorid, String coursename, int coursedurration,
			String coursedescription, Date launchdate, String status) {
		super();
		this.courseid = courseid;
		this.service = service;
		this.vendorid = vendorid;
		this.coursename = coursename;
		this.coursedurration = coursedurration;
		this.coursedescription = coursedescription;
		this.launchdate = launchdate;
		this.status = status;
	}
	
	public Course() {}
}

//{
//    "service":"Asynchronous Learning",
//    "vendorid":1,
//    "coursename":"Spring Boot",
//    "coursedurration":1,
//    "coursedescription":"Very Good Course",
//    "launchdate":"2021-07-15",
//    "status":"active"
//}

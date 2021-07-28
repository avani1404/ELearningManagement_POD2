package com.example.demo.model;

 

import javax.persistence.Column;

 

public class PurchaseDetails {

 

    int courseid;
    String service;
    int vendorid;
    int purchaseid;
    String coursename;
    String vendorname;
    
    
    public String getVendorname() {
		return vendorname;
	}
	public void setVendorname(String vendorname) {
		this.vendorname = vendorname;
	}
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
    public int getPurchaseid() {
        return purchaseid;
    }
    public void setPurchaseid(int purchaseid) {
        this.purchaseid = purchaseid;
    }
    public String getCoursename() {
        return coursename;
    }
    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }
    public PurchaseDetails(int courseid, String service, int vendorid, int purchaseid, String coursename) {
        super();
        this.courseid = courseid;
        this.service = service;
        this.vendorid = vendorid;
        this.purchaseid = purchaseid;
        this.coursename = coursename;
    }
    
    
    
}
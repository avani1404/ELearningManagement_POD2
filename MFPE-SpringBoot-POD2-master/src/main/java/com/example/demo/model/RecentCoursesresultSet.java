package com.example.demo.model;

 

import java.util.Date;

 

public class RecentCoursesresultSet {

 

    private int courseid;
    private String service;
    private int vendorid;
    private String coursename;
    private String vendorname;
    private Date launchdate;
    private String coursedesc;
    private int coursedurration;
    
    private String learnername;
    private int purchaseid;
    
    private String status;
    
    
    public RecentCoursesresultSet(int courseid, String service, String coursename, String vendorname) {
        super();
        this.courseid = courseid;
        this.service = service;
        this.coursename = coursename;
        this.vendorname = vendorname;
    }
    
    
    public RecentCoursesresultSet(int courseid, String service, String coursename, String vendorname, int purchaseid,
            String status) {
        super();
        this.courseid = courseid;
        this.service = service;
        this.coursename = coursename;
        this.vendorname = vendorname;
        this.purchaseid = purchaseid;
        this.status = status;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
   
   
    public String getLearnername() {
        return learnername;
    }
    public void setLearnername(String learnername) {
        this.learnername = learnername;
    }
    public int getPurchaseid() {
        return purchaseid;
    }
    public void setPurchaseid(int purchaseid) {
        this.purchaseid = purchaseid;
        }
    
    
    
    public int getCoursedurration() {
        return coursedurration;
    }
    public void setCoursedurration(int coursedurration) {
        this.coursedurration = coursedurration;
    }
    public Date getLaunchdate() {
        return launchdate;
    }
    public void setLaunchdate(Date launchdate) {
        this.launchdate = launchdate;
    }
    public String getCoursedesc() {
        return coursedesc;
    }
    public void setCoursedesc(String coursedesc) {
        this.coursedesc = coursedesc;
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
    public String getCoursename() {
        return coursename;
    }
    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }
    public String getVendorname() {
        return vendorname;
    }
    public void setVendorname(String vendorname) {
        this.vendorname = vendorname;
    }
    
    public RecentCoursesresultSet(int courseid, String service, int vendorid, String coursename, String vendorname) {
        super();
        this.courseid = courseid;
        this.service = service;
        this.vendorid = vendorid;
        this.coursename = coursename;
        this.vendorname = vendorname;
    }
    
    public RecentCoursesresultSet(int courseid, String service, String coursename, String learnername, int purchaseid) {
        super();
        this.courseid = courseid;
        this.service = service;
        this.coursename = coursename;
        this.learnername = learnername;
        this.purchaseid = purchaseid;
    }
    
    
    
    
    public RecentCoursesresultSet(int courseid, String service, int vendorid, String coursename, String vendorname,
            Date launchdate, String coursedesc, int coursedurration) {
        super();
        this.courseid = courseid;
        this.service = service;
        this.vendorid = vendorid;
        this.coursename = coursename;
        this.vendorname = vendorname;
        this.launchdate = launchdate;
        this.coursedesc = coursedesc;
        this.coursedurration = coursedurration;
    }
    public RecentCoursesresultSet() {}
    
    
}
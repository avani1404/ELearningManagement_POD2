package com.example.demo.model;

 

import java.util.List;

 

public class Mailer {
    
    String vendorname;
    List<String> emails;
    
    public String getVendorname() {
        return vendorname;
    }
    public void setVendorname(String vendorname) {
        this.vendorname = vendorname;
    }
    public List<String> getEmails() {
        return emails;
    }
    public void setEmails(List<String> emails) {
        this.emails = emails;
    }
    
    public Mailer(String vendorname, List<String> emails) {
        super();
        this.vendorname = vendorname;
        this.emails = emails;
    }
}
package com.example.demo.model;

 

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

 

@Entity
@Table(name="subscription")
public class Subscription {

 

    @Id
    private int subscriptionid;
    private int learnerid;
    
    
    public int getSubscriptionid() {
        return subscriptionid;
    }
    public void setSubscriptionid(int subscriptionid) {
        this.subscriptionid = subscriptionid;
    }
    public int getLearnerid() {
        return learnerid;
    }
    public void setLearnerid(int learnerid) {
        this.learnerid = learnerid;
    }
    
    public Subscription(int subscriptionid, int learnerid) {
        super();
        this.subscriptionid = subscriptionid;
        this.learnerid = learnerid;
    }
    public Subscription(int learnerid) {
        super();
        this.learnerid = learnerid;
    }
    
    public Subscription () {}
}
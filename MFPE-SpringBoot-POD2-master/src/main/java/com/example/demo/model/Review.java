package com.example.demo.model;

 

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

 

@Entity
@Table(name="review")
public class Review {

 

    @Id
    private int reviewid;
    private int courseid;
    private int learnerid;
    private String review;
    public int getReviewid() {
        return reviewid;
    }
    public void setReviewid(int reviewid) {
        this.reviewid = reviewid;
    }
    public int getCourseid() {
        return courseid;
    }
    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }
    public int getLearnerid() {
        return learnerid;
    }
    public void setLearnerid(int learnerid) {
        this.learnerid = learnerid;
    }
    public String getReview() {
        return review;
    }
    public void setReview(String review) {
        this.review = review;
    }
    public Review(int reviewid, int courseid, int learnerid, String review) {
        super();
        this.reviewid = reviewid;
        this.courseid = courseid;
        this.learnerid = learnerid;
        this.review = review;
    }
    
    public Review() {}
    public Review(int learnerid, int courseid, String review) {
        this.courseid = courseid;
        this.learnerid = learnerid;
        this.review = review;
    }
    
}
package com.example.demo.model;

 

public class GetReviewResultSet {

 

    private String learnername;
    private String coursename;
    private String review;
    private int courseid;
    
    public GetReviewResultSet(String learnername, String coursename, String review, int courseid) {
        super();
        this.learnername = learnername;
        this.coursename = coursename;
        this.review = review;
        this.courseid = courseid;
    }
    public String getLearnername() {
        return learnername;
    }
    public void setLearnername(String learnername) {
        this.learnername = learnername;
    }
    public String getCoursename() {
        return coursename;
    }
    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }
    public String getReview() {
        return review;
    }
    public void setReview(String review) {
        this.review = review;
    }
    public int getCourseid() {
        return courseid;
    }
    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }
    
    
}
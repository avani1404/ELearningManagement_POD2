package com.example.demo.service;

 

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CourseRepository;
import com.example.demo.dao.PurchaseRepository;
import com.example.demo.dao.ReviewRepository;
import com.example.demo.dao.SubscriptionRepository;
import com.example.demo.dao.UserRepository;
import com.example.demo.dao.UserRepositoryJpa;
import com.example.demo.model.Course;
import com.example.demo.model.GetReviewResultSet;
import com.example.demo.model.Purchase;
import com.example.demo.model.PurchaseDetails;
import com.example.demo.model.RecentCoursesresultSet;
import com.example.demo.model.Review;
import com.example.demo.model.Subscription;
import com.example.demo.model.User;

 

@Service
public class LearnerService {

 

    @Autowired
    private UserRepository userrepo;
    
    @Autowired
    private UserRepositoryJpa ujrepo;
    @Autowired
    private PurchaseRepository prepo;
    @Autowired
    private CourseRepository crepo;
    @Autowired
    private ReviewRepository rrepo;
    @Autowired
    private SubscriptionRepository srepo;

 

    public User getLearnerDetails(int learnerid) {
        Optional<User> data= Optional.ofNullable(new User());
        data=userrepo.findById(learnerid);
        User user= data.get();
        return user;
    }
    
//    public List<Purchase> getAllPurchasedCourses(int learnerid) {
//        List<Purchase> list = new ArrayList();
//        list=prepo.findByLearnerid(learnerid);
//        return list;
//    }
    public List<RecentCoursesresultSet> getAllPurchasedCourses(int learnerid) {
        List<RecentCoursesresultSet> res = new ArrayList();
        List<Purchase> list=prepo.findByLearnerid(learnerid);
        for(Purchase p:list) {
            Course course= crepo.getById(p.getCourseid());
            RecentCoursesresultSet obj = new RecentCoursesresultSet(p.getCourseid(),
                    course.getService(),
                    course.getCoursename(),
                    ujrepo.getById(course.getVendorid()).getName(),
                    p.getPurchaseid(),
                    p.getStatus());
            res.add(obj);
        }
        return res;
    }
    
    public RecentCoursesresultSet getCourseDetails(int id) {
    	
    	Course course = crepo.getById(id);
        int vendorid=course.getVendorid();
        User user= ujrepo.findById(vendorid);
//        RecentCoursesresultSet obj=new RecentCoursesresultSet(course.getCourseid(),course.getService(),course.getVendorid(),course.getCoursename(),user.getName(),course.getLaunchdate(),course.getCoursedescription());
        RecentCoursesresultSet obj=new RecentCoursesresultSet(course.getCourseid(),course.getService(),course.getVendorid(),course.getCoursename(),user.getName(),course.getLaunchdate(),course.getCoursedescription()
                ,course.getCoursedurration());
        
        return obj;
        //return crepo.findById(id);
    }
    
  //return list of courses that learner can purchase
//    public List<Course> getData(int learnerid){
//       
//        List<PurchaseDetails> list= prepo.getdata(learnerid);
//        List<Course> res = crepo.findAll();
//        List<Course> courses= crepo.findAll();
//       
//        List<Integer> purchasedcourseids=new ArrayList();
//        List<Integer> allcourseids= new ArrayList();
//       
//        for(Course c:res) {
//            allcourseids.add(c.getCourseid());
//        }
//        for(PurchaseDetails pd:list) {
//            purchasedcourseids.add(pd.getCourseid());
//        }
//        for(int i:purchasedcourseids) {
//            if(allcourseids.contains(i)) {
//                allcourseids.remove(new Integer(i));
//            }
//        }
//        res=crepo.findAllById(allcourseids);
//        return res;
//    }
    
  //return list of courses that learner can purchase
    public List<RecentCoursesresultSet> getData(int learnerid){
       
        List<PurchaseDetails> list= prepo.getdata(learnerid);
        List<Course> res = crepo.findAll();
        List<Course> courses= crepo.findAll();
        List<RecentCoursesresultSet> data= new ArrayList();
       
        List<Integer> purchasedcourseids=new ArrayList();
        List<Integer> allcourseids= new ArrayList();
       
        for(Course c:res) {
        	if(c.getStatus().equalsIgnoreCase("active")) {
            allcourseids.add(c.getCourseid());
        	}
        }
        for(PurchaseDetails pd:list) {
            purchasedcourseids.add(pd.getCourseid());
        }
        for(int i:purchasedcourseids) {
            if(allcourseids.contains(i)) {
                allcourseids.remove(new Integer(i));
            }
        }
        res=crepo.findAllById(allcourseids);
        for(Course c : res) {
            int vendorid=c.getVendorid();
            User user= ujrepo.findById(vendorid);
            RecentCoursesresultSet obj=new RecentCoursesresultSet(c.getCourseid(),c.getService(),c.getVendorid(),c.getCoursename(),user.getName());
            data.add(obj);
        }
        return data;
    }
    
    
    public void savePurchaseHistory(Purchase purchasedetail) {
        // TODO Auto-generated method stub
        prepo.save(purchasedetail);
    }
    
    public List<RecentCoursesresultSet> getAvailedServices(int learnerid) {
        // TODO Auto-generated method stub
        List<PurchaseDetails> list= prepo.getdata(learnerid);
        List<RecentCoursesresultSet> res= new ArrayList();
       
        for(PurchaseDetails pd: list) {
        	String vendorname=ujrepo.getById(pd.getVendorid()).getName();
            String status = prepo.getById(pd.getPurchaseid()).getStatus();
            RecentCoursesresultSet obj = new RecentCoursesresultSet(
                    pd.getCourseid(),
                    pd.getService(),
                    pd.getCoursename(),
                    vendorname,
                    pd.getPurchaseid(),
                    status);
            res.add(obj);
           
        }
        return res;
    }
    
    public void changeCourseCompletionStatus(int learnerid, int courseid) {
        // TODO Auto-generated method stub
        Purchase data=prepo.findByLearneridAndCourseid(learnerid,courseid);
        data.setStatus("Completed");
        prepo.save(data);
    }
    
    public List<RecentCoursesresultSet> getLatestCourses() {
        List<Course> courses= new ArrayList();
        List<RecentCoursesresultSet> res = new ArrayList();
        courses=crepo.findAll();
       
        //getting the date
        LocalDate currentDate = LocalDate.now();
        LocalDate currentDateMinus1Month = currentDate.minusMonths(1);
        //to change localdate into date type
        Date checkdate = java.sql.Timestamp.valueOf(currentDateMinus1Month.atStartOfDay());
        System.out.println(checkdate);
        for(Course course:courses) {
            if(course.getStatus().equals("active")) {
             if(course.getLaunchdate().after(checkdate)) {
//                 String vendorname= ujrepo.findById(course.getVendorid()).getName();
            	 String vendorname= ujrepo.findById(course.getVendorid()).getName();
                 RecentCoursesresultSet obj= new RecentCoursesresultSet(course.getCourseid(),course.getService(),course.getVendorid(),course.getCoursename(),vendorname);
                 System.out.println(obj);
                 res.add(obj);
             }
            }
        }
        return res;   
    }
    
    public List<RecentCoursesresultSet> getCoursesByServicename(String service) {
        List<Course> courses = crepo.findByService(service);
        List<RecentCoursesresultSet> res= new ArrayList();
        for(Course course:courses) {
            if(course.getStatus().equalsIgnoreCase("active")) {
                int vendorid=course.getVendorid();
                User user= ujrepo.findById(vendorid);
                RecentCoursesresultSet obj=new RecentCoursesresultSet(course.getCourseid(),course.getService(),course.getVendorid(),course.getCoursename(),user.getName(),course.getLaunchdate(),course.getCoursedescription()
                        ,course.getCoursedurration());
                res.add(obj);
            }
        }
        return res;
    }
    
//    public List<Course> getAllActiveService() {
//        List<Course> course = crepo.findAll();
//        List<Course> res = new ArrayList();
//       
//        for(Course c : course) {
//            if(c.getStatus().equalsIgnoreCase("active")) {
//                res.add(c);
//            }
//        }
//        return res;
//    }
//    
    
    public List<RecentCoursesresultSet> getAllActiveService() {
        List<Course> courses = crepo.findAll();
        List<Course> res = new ArrayList();
        List<RecentCoursesresultSet> list= new ArrayList();
        for(Course c : courses) {
            if(c.getStatus().equalsIgnoreCase("active")) {
                res.add(c);
            }
        }
        for(Course course :res) {
            String vendorname=ujrepo.getById(course.getVendorid()).getName();
            RecentCoursesresultSet obj=new RecentCoursesresultSet(course.getCourseid(),course.getService(),course.getVendorid(),course.getCoursename(),vendorname,course.getLaunchdate(),course.getCoursedescription()
                    ,course.getCoursedurration());
            list.add(obj);
        }
        return list;
    }
    
  //get purchase details for learnerid for completed courses only
    public List<RecentCoursesresultSet> getCompletedPurchasesByLearnerid(int learnerid) {
        List<RecentCoursesresultSet> list = new ArrayList();
        List<Purchase> purchases = prepo.findByLearnerid(learnerid);
       
        for(Purchase p:purchases) {
            if(p.getStatus().equalsIgnoreCase("Completed")) {
                String vendorname = ujrepo.getById(p.getVendorid()).getName();
                String coursename = crepo.getById(p.getCourseid()).getCoursename();
                String service= crepo.getById(p.getCourseid()).getService();
               
                RecentCoursesresultSet obj = new RecentCoursesresultSet(p.getCourseid(),
                        service,
                        coursename,
                        vendorname);
                list.add(obj);
            }
        }
        return list;
    }
    
    //saves the review
    public String saveReview(int learnerid, int courseid, String review) {
        boolean flag=true;
        List<Review> reviews = rrepo.findAll();
        for(Review r :reviews) {
            if(r.getLearnerid()==learnerid && r.getCourseid()==courseid ) {
                flag= false;
                break;
            }
        }
        if(flag==true) {
            Review obj = new Review(learnerid,courseid,review);
            rrepo.save(obj);
            return "saved";
        }
        else {
            Review obj = rrepo.getByLearneridAndCourseid(learnerid,courseid);
            obj.setReview(review);
            rrepo.save(obj);
            return "updated";
        }
    }
    
    public List<GetReviewResultSet> getReviewsByCourseid(int courseid) {
        List<GetReviewResultSet> res = new ArrayList();
        List<Review> reviews = rrepo.findByCourseid(courseid);
       
        for(Review r:reviews) {
            String learnername = ujrepo.getById(r.getLearnerid()).getName();
            String coursename= crepo.getById(r.getCourseid()).getCoursename();
            GetReviewResultSet obj = new GetReviewResultSet(learnername,coursename,r.getReview(),r.getCourseid());
            res.add(obj);
        }
        return res;
    }
    
    public String saveAllSubscribedLearners(int learnerid) {
        if(srepo.existsByLearnerid(learnerid))
        {
            return "already subscribed";
        }
        else {
            Subscription obj = new Subscription(learnerid);
            srepo.save(obj);
            return "subscribed";
        }
       
    }
 
    
    
}
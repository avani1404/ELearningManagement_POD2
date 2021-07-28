package com.example.demo.controller;

 

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Course;
import com.example.demo.model.GetReviewResultSet;
import com.example.demo.model.Purchase;
import com.example.demo.model.PurchaseDetails;
import com.example.demo.model.RecentCoursesresultSet;
import com.example.demo.model.User;
import com.example.demo.service.LearnerService;

 

@Controller
public class LearnerController {
    
    @Autowired
    private LearnerService learnerservice;
    
    
    @GetMapping("/get-learner-details/{learnerid}")
    @Transactional
    @ResponseBody
    @CrossOrigin("http://localhost:4200")
    public User getLearnerDetails(@PathVariable("learnerid") int learnerid){
        return learnerservice.getLearnerDetails(learnerid);
    }
    
    
    @GetMapping("/get-all-purchased-courses/{learnerid}")
    @Transactional
    @ResponseBody
    @CrossOrigin("http://localhost:4200")
//    public List<Purchase> getAllPurchasedCourses(@PathVariable("learnerid")int learnerid){
//        return learnerservice.getAllPurchasedCourses(learnerid);
//    }
    public List<RecentCoursesresultSet> getAllPurchasedCourses(@PathVariable("learnerid")int learnerid){
        return learnerservice.getAllPurchasedCourses(learnerid);
    }
    
    
    @GetMapping("/get-course-details/{courseid}")
    @Transactional
    @ResponseBody
    @CrossOrigin("http://localhost:4200")
    public RecentCoursesresultSet getCourseDetails(@PathVariable("courseid")int courseid) {
        Course course = new Course();
        return learnerservice.getCourseDetails(courseid);
    }
    
 // Shows all the courses that are available for learner and not purchased by him till date
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/learner-list-of-all-services/{learnerid}")
    @ResponseBody
    public List<RecentCoursesresultSet> getAvailableServices(@PathVariable("learnerid")int learnerid){
        return learnerservice.getData(learnerid);
    }
    
  //save purchase history
    @PostMapping("/save-purchase-history")
    @CrossOrigin("http://localhost:4200")
    public String savePurchaseHistory(@RequestBody Purchase purchasedetail) {
        learnerservice.savePurchaseHistory(purchasedetail);
        return "purchased!";
    }
    
  //List of availed services that learner has purchased
    @GetMapping("/learner-availed-courses-list/{learnerid}")
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    public List<RecentCoursesresultSet> getAvailedServices(@PathVariable("learnerid")int learnerid){
        return learnerservice.getAvailedServices(learnerid);
    }
    
    
  //change status in purchase history table
    @GetMapping("/update-purchase-history-status/{learnerid}/{courseid}")
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    public String changeCourseCompletionStatus(@PathVariable("learnerid")int learnerid,@PathVariable("courseid")int courseid) {
        learnerservice.changeCourseCompletionStatus(learnerid,courseid);
        return "Status updated!";
    }
    
  //get all the courses that are added in last  30 days
    @GetMapping("/get-latest-details")
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    public List<RecentCoursesresultSet> getLatestCourses(){
        return learnerservice.getLatestCourses();
       
    }
    
  //learner search option to show courses of particular service type
    @GetMapping("/get-courses-by-servicename-learner/{service}")
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    public List<RecentCoursesresultSet> getCoursesByServicename(@PathVariable("service") String service){
        return learnerservice.getCoursesByServicename(service);
    }
    
  //get all the courses that are active
    @GetMapping("/get-active-courses-learner")
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    public List<RecentCoursesresultSet> getAllActiveCourses(){
        return learnerservice.getAllActiveService();
    }
    
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    @GetMapping("/get-completed-purchased-courses-by-learnerid/{learnerid}")
    public List<RecentCoursesresultSet> getCompletedPurchasesByLearnerid(@PathVariable("learnerid") int learnerid){
        return learnerservice.getCompletedPurchasesByLearnerid(learnerid);
   
    }
    
  //save reviews
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    @GetMapping("/save-reviews/{learnerid}/{courseid}/{review}")
    public String saveReviews(@PathVariable("learnerid")int learnerid,@PathVariable("courseid")int courseid,@PathVariable("review")String review) {
        return learnerservice.saveReview(learnerid,courseid,review);
       
    }
    
 // get reviews according to courseid
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    @GetMapping("/get-reviews-by-courseid/{courseid}")
    public List<GetReviewResultSet> getReviewsByCourseid(@PathVariable("courseid") int courseid){
        return learnerservice.getReviewsByCourseid(courseid);
       
    }
    
  //add learner to subscription table
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    @GetMapping("/save-subscription/{learnerid}")
    public String saveAllSubscribedLearners(@PathVariable("learnerid")int learnerid){
        return learnerservice.saveAllSubscribedLearners(learnerid);
    }
    
}
 
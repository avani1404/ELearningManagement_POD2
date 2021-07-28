package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Course;
import com.example.demo.model.Mailer;
import com.example.demo.model.Purchase;
import com.example.demo.model.RecentCoursesresultSet;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.service.VendorService;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class VendorController {

	@Autowired
	private VendorService vendorservice;
	
	@Autowired
	private UserService userservice;
	
	
	@CrossOrigin("http://localhost:4200")
	@PostMapping("/add-course")
	@Transactional
	@ResponseBody
	public String addNewCourse(@RequestBody Course course) {
		
		return vendorservice.addCourse(course);
		//return "Course added!";
		
	}
	

	@GetMapping("/show-courses-by-vendorid/{vendorid}")
	@Transactional
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public List<Course> getCoursesByVendorid(@PathVariable("vendorid")int vendorid){
		return vendorservice.getCoursesByVendorId(vendorid);
		
	}
	
	@GetMapping("/show-all-courses")
	@Transactional
	@ResponseBody
	@CrossOrigin
	public List<Course> getAllCourses(){
		return vendorservice.getAllCourses();
	}
	
	//Get courses sorted by service name
	@GetMapping("/courses-by-servicename")
	@Transactional
	@ResponseBody
	@CrossOrigin
	public List<Course> getCoursesByServicename(@RequestBody String servicename){
		return vendorservice.getCoursesByServiceName(servicename);
	}
	
	// Change status of courses
	@PutMapping("/change-course-status")
	@Transactional
	@ResponseBody
	@CrossOrigin
	public String updateCourseStatus(@RequestBody Course course) {
		vendorservice.changeCourseStatus(course);
		return "updated!";
	}
	
	//Change Status of Vendor
	//Change Status of Vendor
    @GetMapping("/change-vendor-status/{vendorid}/{status}")
    @Transactional
    @ResponseBody
    @CrossOrigin("http://localhost:4200")
    public String updateVendorDetails(@PathVariable("vendorid")int vendorid,@PathVariable("status")String status) {
        userservice.updateUserDetails(vendorid,status);
        return "Sucessful";
    }
    
  //Get vendor details
    @GetMapping("/get-vendor-details/{vendorid}")
    @Transactional
    @ResponseBody
    @CrossOrigin
    public User getDetails(@PathVariable("vendorid") int vendorid) {
        return vendorservice.getDetails(vendorid);
    }
    @PutMapping("/update-vendor")
    @Transactional
    @ResponseBody
    @CrossOrigin
    public String updateDetails(@RequestBody User user) {
        vendorservice.updateVendor(user);
        return "updated!";
    }
    
    @GetMapping("/list-of-courseid-by-vendorid/{vendorid}")
    @Transactional
    @ResponseBody
    @CrossOrigin
    public List<Integer> getAllCourseByVendorId(@PathVariable("vendorid") int vendorid){
        List<Course> list = new ArrayList();
        list = vendorservice.getCoursesByVendorId(vendorid);
        List<Integer> courseids=new ArrayList();
        for(Course c:list) {
            courseids.add(c.getCourseid());
        }
        return courseids;
    }
    
    @GetMapping("/change-course-status/{courseid}/{status}")
    @Transactional
    @ResponseBody
    @CrossOrigin
    public String updateCourseStatus(@PathVariable("courseid")int courseid,@PathVariable("status")String status) {
        vendorservice.updateCourseStatus(courseid,status);
        return "Succesful";
    }
    
    @GetMapping("/change-services-status/{vendorid}/{service}/{status}")
    @Transactional
    @ResponseBody
    @CrossOrigin
    public String changeServiceStatus(@PathVariable("vendorid") int vendorid,@PathVariable("service") String service, @PathVariable("status") String status ) {
        List<Course> list = new ArrayList();
        list = vendorservice.getCoursesByVendorId(vendorid);
        for(Course c:list) {
            if(c.getService().equals(service)) {
                c.setStatus(status);
                vendorservice.addCourse(c);
            }
        }
        return "updated";
    }
    
//    @GetMapping("/get-courseid-by-vendorid-and-servicename/{vendorid}/{servicename}")
//    @Transactional
//    @ResponseBody
//    @CrossOrigin("http://localhost:4200")
//    public List<Course>  getCourseidByVendoridAndServicename(@PathVariable("vendorid")int vendorid,@PathVariable("servicename")String servicename){
//        return vendorservice.getCourseidByVendoridAndServicename(vendorid, servicename);
//    }
    @GetMapping("/get-courseid-by-vendorid-and-servicename/{vendorid}/{servicename}")
    @Transactional
    @ResponseBody
    @CrossOrigin("http://localhost:4200")
    public List<Integer> getCourseidByVendoridAndServicename(@PathVariable("vendorid")int vendorid,@PathVariable("servicename")String servicename){
        return vendorservice.getCourseidByVendoridAndServicename(vendorid, servicename);
    }
	
    @GetMapping("/get-purchase-history-by-vendorid/{vendorid}")
    @Transactional
    @ResponseBody
    @CrossOrigin("http://localhost:4200")
    public List<RecentCoursesresultSet> getPurchaseDetailsByVendorId(@PathVariable("vendorid") int vendorid){
        return vendorservice.getAllPurchaseHistory(vendorid);
    }
	
    @PostMapping("/save-course-id/{courseid}")
    @CrossOrigin("http://localhost:4200")
    public void saveCurrentCourseId(@PathVariable("courseid") int courseid) {
        vendorservice.saveCurrentCourseId(courseid);
//        return("Saved");
    }
    @GetMapping("/get-current-courseid-details")
    @CrossOrigin("http://localhost:4200")
    public Optional<Course> getCurrentCourseDetails() {
        return vendorservice.getCurrentCourseDetails();
    }
    
    @CrossOrigin("http://localhost:4200")
    @PostMapping("/update-course-details")
    public String getUpdateCourseDetails(@RequestBody Course course) {
        vendorservice.updateCourseDetails(course);
        return "updated!";
    }
    
    @GetMapping("/get-courses-by-vendorid/{vendorid}")
    @CrossOrigin("http://localhost:4200")
    public List<Course> getCoursesByVendorId(@PathVariable("vendorid") int vendorid){
        return vendorservice.getCoursesByVendorId(vendorid);
    }
    
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    @GetMapping("/get-courses-by-vendorid-and-servicename/{vendorid}/{servicename}")
    public List<Course> getCoursesByVendoridAndServicename(@PathVariable("vendorid")int vendorid,@PathVariable("servicename")String servicename){
        return vendorservice.getCoursesByVendoridAndServicename(vendorid,servicename);
    }
    
  //generate mailer data
    @CrossOrigin("http://localhost:4200")
    @ResponseBody 
    @GetMapping("/generate-mail-data")
    public List<String> getMailData() {
            return vendorservice.getMailData();
    }
    
    @CrossOrigin("http://localhost:4200")
    @ResponseBody 
    @GetMapping("/toggle-status-by-vendorid/{vendorid}")
    public String changeStatus(@PathVariable("vendorid") int vendorid) {
        vendorservice.changeStatus(vendorid);
        return "updated";
    }
	
}

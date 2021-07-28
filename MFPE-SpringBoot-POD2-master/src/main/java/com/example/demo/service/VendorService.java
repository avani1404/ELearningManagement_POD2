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
import com.example.demo.dao.SubscriptionRepository;
import com.example.demo.dao.UserRepository;
import com.example.demo.dao.UserRepositoryJpa;
import com.example.demo.model.Course;
import com.example.demo.model.Mailer;
import com.example.demo.model.Purchase;
import com.example.demo.model.RecentCoursesresultSet;
import com.example.demo.model.Subscription;
import com.example.demo.model.User;

@Service
public class VendorService {
	
	@Autowired
	private CourseRepository repo;
	@Autowired
	private PurchaseRepository prepo;
	@Autowired
	private UserRepositoryJpa ujrepo;
	
	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private SubscriptionRepository srepo;
	
	private static int currentcourseid;
	
	public VendorService() {}
	
	public VendorService(CourseRepository repo) {
		super();
		this.repo = repo;
	}


//	public void addCourse(Course course) {
//        LocalDate currentDate = LocalDate.now();
//        Date date = java.sql.Timestamp.valueOf(currentDate.atStartOfDay());
//        course.setLaunchdate(date);
//        repo.save(course);
//    }
				public String addCourse(Course course) {     
					List<Course> courses = repo.findAll();
					Boolean flag=true;
					for(Course c : courses) {
			            if(c.getCoursename().equalsIgnoreCase(course.getCoursename() )) {
			                flag=false;
			                break;
			            }
			        }
			        if(flag) {
			            LocalDate currentDate = LocalDate.now();
			            Date date = java.sql.Timestamp.valueOf(currentDate.atStartOfDay());
			            course.setLaunchdate(date);
			            repo.save(course);
			            return "saved";
			        }
			        else {
			            return "Coursename already exists";
			        }
			   
			}
				
	public List<Course> getCoursesByVendorId(int id){
		return repo.findByVendorid(id);
	}

	public List<Course> getAllCourses() {
		return repo.findAll();
	}

	public List<Course> getCoursesByServiceName(String servicename) {
		return repo.findByService(servicename);
	}

	public void changeCourseStatus(Course course) {
		 repo.save(course);
		
	}

//	public List<Purchase> getAllPurchaseHistory(int id) {
//		return prepo.findByVendorid(id);
//		
//	}
	public List<RecentCoursesresultSet> getAllPurchaseHistory(int id) {
        List<Purchase> purchase=prepo.findByVendorid(id);
        List<RecentCoursesresultSet> res =new ArrayList();
       
        for(Purchase p:purchase) {
            String learnername=ujrepo.getById(p.getLearnerid()).getName();
            String coursename=repo.getById(p.getCourseid()).getCoursename();
            String service =repo.getById(p.getCourseid()).getService();
            RecentCoursesresultSet obj = new RecentCoursesresultSet(p.getCourseid(),service,coursename,learnername,p.getPurchaseid());
            res.add(obj);
        }
       return res;
   }
	
	public User getDetails(int vendorid) {
        Optional<User> data= Optional.ofNullable(new User());
        data=userrepo.findById(vendorid);
        User user= data.get();
        return user;
    }

	public void updateVendor(User user) {
        // TODO Auto-generated method stub
        ujrepo.save(user);
    }
	
	public void updateCourseStatus(int courseid, String status) {
        Optional<Course> data= Optional.ofNullable(new Course());
        data=repo.findById(courseid);
        Course course= data.get();
        course.setStatus(status);
        repo.save(course);
       
    }

	public List<Integer> getCourseidByVendoridAndServicename(int vendorid,String service) {
        List<Course> list = new ArrayList();
        list= repo.findByVendoridAndService(vendorid,service);
        List<Integer> res= new ArrayList();
        for(Course c:list) {
            res.add(c.getCourseid());
        }
        return res;
    }
	
	public void saveCurrentCourseId(int courseid) {
        this.currentcourseid=courseid;
        System.out.println(currentcourseid);
       
    }
	
	public Optional<Course> getCurrentCourseDetails() {
        // TODO Auto-generated method stub
        return repo.findById(currentcourseid);
    }
	
	public void updateCourseDetails(Course course) {
        // TODO Auto-generated method stub
        repo.save(course);
       
    }
	
	public List<Course> getCoursesByVendoridAndServicename(int vendorid, String servicename) {
	       
        return repo.findByVendoridAndService(vendorid, servicename);
    }
	
	public List<String> getMailData() {
        List<Subscription> list = srepo.findAll();
        List<Integer> ids = new ArrayList();
        for(Subscription s : list) {
            ids.add(s.getLearnerid());
        }
        List<String> emails= new ArrayList();
        for(int id:ids) {
            emails.add(ujrepo.getById(id).getEmail());
        }
        return emails;
    }
	
	public void changeStatus(int vendorid) {
        User user= ujrepo.getById(vendorid);
        String status=ujrepo.getById(vendorid).getStatus();
        if(status.equalsIgnoreCase("Active")) {
            user.setStatus("Deactive");
        }
        else {
            user.setStatus("Active");
        }
        ujrepo.save(user);
       
    }
	
//	public Mailer getMailData(int vendorid) {
//        String vendorname=ujrepo.getById(vendorid).getName();
//        List<Subscription> list = srepo.findAll();
//        List<Integer> ids = new ArrayList();
//        for(Subscription s : list) {
//            ids.add(s.getLearnerid());
//        }
//        List<String> emails= new ArrayList();
//        for(int id:ids) {
//            emails.add(ujrepo.getById(id).getEmail());
//        }
//        Mailer res = new Mailer(vendorname,emails);
//        return res;
//    }

//	public User getAllDetails(int id) {
//		// TODO Auto-generated method stub
//		
//		
//	}
	
	

}

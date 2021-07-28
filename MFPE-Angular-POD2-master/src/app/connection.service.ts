import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { AddService } from './addservices';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http : HttpClient) { }

  //admin
  public doRegistration(user: any){
    console.log(user.contact);
    return this.http.post("http://localhost:8080/save-user",user, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/show-all-users");
  }

  public login(login: any)
  {
    return this.http.post("http://localhost:8080/login",login, {responseType : "text" as "json"})
  }

  public getUserByRole(username: any){
    return this.http.get("http://localhost:8080/admin-user-search"+username);
  }

  public deleteUser(username: any){
    return this.http.get("http://localhost:8080/delete/"+username);
  }
      //admin search by role
      public getUsersByrole(role:any){
        console.log("here we have:"+role);
        return this.http.get("http://localhost:8080/admin-user-search/"+role);
      }

  public changeStatus(vendorid:number){
    return this.http.get("http://localhost:8080/toggle-status-by-vendorid/"+vendorid);
  }


  //vendor

  public addNewCourse(course:any)
  {
    return this.http.post("http://localhost:8080/add-course",course,{responseType : "text" as "json"});
    //return "Course added!"
  }

  public vEditProfile(user:any){
    return this.http.put("http://localhost:8080/update-vendor/",user, {responseType : "text" as "json"});
  }
  //for vendor edit
  public getUserDetail(id:any){
    console.log("Reached Here with this: "+id);
    return this.http.get("http://localhost:8080/get-vendor-details/"+id);
  }
  public changeProfileStatus(vendorid:any,status:any){    
    return this.http.get("http://localhost:8080/change-vendor-status/"+vendorid+"/"+status,{responseType : "text" as "json"});
  }

  public showallcourses(id:any)
  { let vendorid = id;
       console.log(id);
    //for listing all services here id = undefined
        
     return this.http.get("http://localhost:8080/show-courses-by-vendorid/"+vendorid)
  }
  public addservice(service : AddService){
    return this.http.post("http://localhost:8080/add-course", service,{responseType:"text" as "json"});
  }
  public getAllCourseByVendorId(vid:any){    
    //hardcoded this one {add logic here}
    //vid=1;
    return this.http.get("http://localhost:8080/list-of-courseid-by-vendorid/"+vid);

  }
  public updateCourseStatus(courseid:any,status:any){
    return this.http.get("http://localhost:8080/change-course-status/"+courseid+"/"+status);
  }

  public updateServiceStatus(vid:any,service:any,status:any){
    return this.http.get("http://localhost:8080/change-services-status/"+vid+"/"+service+"/"+status);
  }

   public getCourseidByVendoridAndServicename(vendorid:any,serviceName:any){
    return this.http.get("http://localhost:8080/get-courseid-by-vendorid-and-servicename/"+vendorid+"/"+serviceName);
   }

   public getPurchaseDetailsByVendorId(vid:any){
    return this.http.get("http://localhost:8080/get-purchase-history-by-vendorid/"+vid);
   }

   public saveCurrentCourseId(courseid:any){
     console.log(courseid);
    return this.http.post("http://localhost:8080/save-course-id/"+courseid,{responseType:"text" as "json"});
   }

   public getCurrentCourseDetails(){
    return this.http.get("http://localhost:8080/get-current-courseid-details");
   }

   public getUpdateCourseDetails(rescor:Course){
    // console.log(this.rescor);
    return this.http.post("http://localhost:8080/update-course-details",rescor,{responseType:"text" as "json"});
   }

   public getCoursesByVendorId(vendorid: any){
    return this.http.get("http://localhost:8080/get-courses-by-vendorid/"+vendorid);
   }

   public getCoursesByVendoridAndServicename(vendorid: any, service:any){
    return this.http.get("http://localhost:8080/get-courses-by-vendorid-and-servicename/"+vendorid+"/"+service);
   }

  

  //learner
  public getLearnerDetails(lid:any){
    console.log(lid);
    return this.http.get("http://localhost:8080/get-learner-details/"+lid);
  }

  public getAllPurchasedCourses(lid:any){
    return this.http.get("http://localhost:8080/get-all-purchased-courses/"+lid);
  }

  public getCourseDetails(courseid:any){
    return this.http.get("http://localhost:8080/get-course-details/"+courseid);
  }

  public getAvailableServices(lid:any){
    return this.http.get("http://localhost:8080/learner-list-of-all-services/"+lid);
  }

  public savePurchaseHistory(purchaseItem:any){
    return this.http.post("http://localhost:8080/save-purchase-history",purchaseItem,{responseType:"text" as "json"});
  }

  public getAvailedServices(id:any){
    return this.http.get("http://localhost:8080/learner-availed-courses-list/"+id);
  }

  public changeCourseCompletionStatus(learnerid:any,courseid:any){
    return this.http.get("http://localhost:8080/update-purchase-history-status/"+learnerid+"/"+courseid);
  }

  public  getLatestCourses(){
    return this.http.get("http://localhost:8080/get-latest-details");
  }

  //done
  public getCoursesByServicename(service:any){
    return this.http.get("http://localhost:8080/get-courses-by-servicename-learner/"+service);
  }

  public getAllActiveCourses(){
    return this.http.get("http://localhost:8080/get-active-courses-learner");
  }

  public getCompletedPurchasesByLearnerid(learnerid:any){
    return this.http.get("http://localhost:8080/get-completed-purchased-courses-by-learnerid/"+learnerid);
  }

  public saveReviews(learnerid:any,courseid:any,review:any){
    return this.http.get("http://localhost:8080/save-reviews/"+learnerid+"/"+courseid+"/"+review);
  }

  public getReviewsByCourseid(courseid:any){
    return this.http.get("http://localhost:8080/get-reviews-by-courseid/"+courseid);
  }

  public saveAllSubscribedLearners(learnerid:any){
    console.log(learnerid);
    return this.http.get("http://localhost:8080/save-subscription/"+learnerid);
  }

  public getMailData(){
    return this.http.get("http://localhost:8080/generate-mail-data/");
  }



  //:::::::for Implementing Session use this:::::::
  //:::::::for Implementing Session use this:::::::
  //:::::::for Implementing Session use this:::::::
  //:::::::for Implementing Session use this:::::::
  public getUserId(email:any){
    return this.http.get("http://localhost:8080/get-userid-by-emailid/"+email);
  }

  //:::::::for Implementing Emaiil use this:::::::
  //:::::::for Implementing Session use this:::::::
  //:::::::for Implementing Session use this:::::::
  //:::::::for Implementing Session use this:::::::
  public sendEmail(url: string, data: { name: any; email: any; }) {
    return this.http.post(url, data);
  }
}

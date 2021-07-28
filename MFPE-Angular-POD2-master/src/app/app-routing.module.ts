import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

import { ALayoutComponent } from './a-layout/a-layout.component';
import { ALoginComponent } from './a-login/a-login.component';
import { AVeditServiceFormComponent } from './a-vedit-service-form/a-vedit-service-form.component';
import { AVendorAddServiceSucessfullyComponent } from './a-vendor-add-service-sucessfully/a-vendor-add-service-sucessfully.component';
import { AVendorAddServiceComponent } from './a-vendor-add-service/a-vendor-add-service.component';
import { AVendorChangeprofileStatusComponent } from './a-vendor-changeprofile-status/a-vendor-changeprofile-status.component';
import { AVendorEditServiceComponent } from './a-vendor-edit-service/a-vendor-edit-service.component';
import { AVendorEditprofileComponent } from './a-vendor-editprofile/a-vendor-editprofile.component';
import { AVendorHomeComponent } from './a-vendor-home/a-vendor-home.component';
import { AVendorListAllservicesComponent } from './a-vendor-list-allservices/a-vendor-list-allservices.component';
import { AVendorOnlineServicesComponent } from './a-vendor-online-services/a-vendor-online-services.component';
import { AVendorOnlineservicesChangestatusCoursesComponent } from './a-vendor-onlineservices-changestatus-courses/a-vendor-onlineservices-changestatus-courses.component';
import { AVendorOnlineservicesChangestatusServiceComponent } from './a-vendor-onlineservices-changestatus-service/a-vendor-onlineservices-changestatus-service.component';
import { AVendorOnlineservicesChangestatusComponent } from './a-vendor-onlineservices-changestatus/a-vendor-onlineservices-changestatus.component';
import { AVendorOrderhistoryComponent } from './a-vendor-orderhistory/a-vendor-orderhistory.component';
import { AVendorProfileComponent } from './a-vendor-profile/a-vendor-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminAddnewUserComponent } from './admin-addnew-user/admin-addnew-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminUpdateUserComponent } from './admin-update-user/admin-update-user.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { EditServiceFormComponent } from './edit-service-form/edit-service-form.component';
import { LLayoutComponent } from './l-layout/l-layout.component';
import { LLoginComponent } from './l-login/l-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LearnerAvailedservicesComponent } from './learner-availedservices/learner-availedservices.component';
import { LearnerChangestatusComponent } from './learner-changestatus/learner-changestatus.component';
import { LearnerCourseDescriptionComponent } from './learner-course-description/learner-course-description.component';
import { LearnerEditprofileComponent } from './learner-editprofile/learner-editprofile.component';
import { LearnerHistoryComponent } from './learner-history/learner-history.component';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { LearnerListofServicesComponent } from './learner-listof-services/learner-listof-services.component';
import { LearnerOnlineservicespageComponent } from './learner-onlineservicespage/learner-onlineservicespage.component';
import { LearnerProfileComponent } from './learner-profile/learner-profile.component';
import { LearnerSearchComponent } from './learner-search/learner-search.component';
import { LearnerShowNewcoursesComponent } from './learner-show-newcourses/learner-show-newcourses.component';
import { LearnerSubscriptionComponent } from './learner-subscription/learner-subscription.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PurchaseSucesfullComponent } from './purchase-sucesfull/purchase-sucesfull.component';
import { RegisterSucessfulComponent } from './register-sucessful/register-sucessful.component';
import { RegistrationPageLComponent } from './registration-page-l/registration-page-l.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SucessfulUpdationAComponent } from './sucessful-updation-a/sucessful-updation-a.component';
import { SucessfulUpdationLComponent } from './sucessful-updation-l/sucessful-updation-l.component';
import { SucessfulUpdationVComponent } from './sucessful-updation-v/sucessful-updation-v.component';
import { SucessfulUpdationComponent } from './sucessful-updation/sucessful-updation.component';
import { VLayoutComponent } from './v-layout/v-layout.component';
import { VLoginComponent } from './v-login/v-login.component';
import { VendorAddServiceSucessfullyComponent } from './vendor-add-service-sucessfully/vendor-add-service-sucessfully.component';
import { VendorAddServiceComponent } from './vendor-add-service/vendor-add-service.component';
import { VendorChangeprofileStatusComponent } from './vendor-changeprofile-status/vendor-changeprofile-status.component';
import { VendorEditServiceComponent } from './vendor-edit-service/vendor-edit-service.component';
import { VendorEditprofileComponent } from './vendor-editprofile/vendor-editprofile.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorListAllservicesComponent } from './vendor-list-allservices/vendor-list-allservices.component';
import { VendorOnlineservicesChangestatusCoursesComponent } from './vendor-onlineservices-changestatus-courses/vendor-onlineservices-changestatus-courses.component';
import { VendorOnlineservicesChangestatusServiceComponent } from './vendor-onlineservices-changestatus-service/vendor-onlineservices-changestatus-service.component';
import { VendorOnlineservicesChangestatusComponent } from './vendor-onlineservices-changestatus/vendor-onlineservices-changestatus.component';
import { VendorOnlineservicesComponent } from './vendor-onlineservices/vendor-onlineservices.component';
import { VendorOrderhistoryComponent } from './vendor-orderhistory/vendor-orderhistory.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearnerWriteReviewComponent } from './learner-write-review/learner-write-review.component';
import { LearnerListReviewComponent } from './learner-list-review/learner-list-review.component';
import { LearnerViewReviewComponent } from './learner-view-review/learner-view-review.component';
import { ARegisterSucessfulComponent } from './a-register-sucessful/a-register-sucessful.component';
import { LearnerCompletedSucessfullyComponent } from './learner-completed-sucessfully/learner-completed-sucessfully.component';

const routes: Routes = [
  { path:'landing_page', component:LandingPageComponent},
  { path:'', component:LandingPageComponent},
  { path:'a_login', component:ALoginComponent},
  { path:'v_login', component:VLoginComponent},
  { path:'l_login', component:LLoginComponent},
  { path:'registration_page', component:RegistrationPageComponent},
  { path:'register_sucessful', component:RegisterSucessfulComponent},
  { path:'registration_page_l', component:RegistrationPageLComponent},
  { path:'a_layout', component:ALayoutComponent,
   canActivate:[AuthenticationGuard],
    // canActivateChild:[AuthenticationGuard],
    children:[
      { path:'', component:AdminHomeComponent},
      { path:'admin_home', component:AdminHomeComponent},
      { path:'admin_search', component:AdminSearchComponent},
      { path:'about_us', component:AboutUsComponent},
      { path:'our_team', component:OurTeamComponent},
      { path:'admin_add_user', component:AdminAddUserComponent},
      {path:'admin_update_user', component:AdminUpdateUserComponent},
      { path:'a_vendor_home', component:AVendorHomeComponent},
      { path:'a_vendor_profile', component:AVendorProfileComponent},
      { path:'a_vendor_editprofile', component: AVendorEditprofileComponent},
      { path:'a_vendor_changeprofile_status', component:AVendorChangeprofileStatusComponent},
      { path:'a_vendor_orderhistory', component:AVendorOrderhistoryComponent},
      { path:'a_vendor_onlineservices', component:AVendorOnlineServicesComponent},
      { path:'a_vendor_list_allservices', component:AVendorListAllservicesComponent},
      { path:'a_vendor_add_service',component:AVendorAddServiceComponent},
      { path:'a_vendor_edit_service', component:AVendorEditServiceComponent},
      { path:'a_vendor_onlineservices_changestatus', component:AVendorOnlineservicesChangestatusComponent},
      { path:'a_vendor_onlineservices_changestatus_courses', component:AVendorOnlineservicesChangestatusCoursesComponent},
      { path:'a_vendor_onlineservices_changestatus_service', component:AVendorOnlineservicesChangestatusServiceComponent},
      { path:'sucessful_updation_a', component:SucessfulUpdationAComponent},
      { path:'admin_addnew_user', component:AdminAddnewUserComponent},
      { path:'admin_user_list', component:AdminUserListComponent},
      { path:'register_sucessful', component:RegisterSucessfulComponent},
      { path:'a_vedit_service_form', component:AVeditServiceFormComponent},
      { path:'a_vendor_add_service_sucessfully', component:AVendorAddServiceSucessfullyComponent},
      { path:'a_register_sucessful',component:ARegisterSucessfulComponent}


    ]
  },
  { path:'v_layout', component:VLayoutComponent,
      canActivate:[AuthenticationGuard],
    children:[
      { path:'', component:VendorHomeComponent},
      { path:'vendor_home', component:VendorHomeComponent},
      { path:'vendor_search', component:VendorSearchComponent},
      { path:'about_us', component:AboutUsComponent},
      { path:'our_team', component:OurTeamComponent},
      { path:'vendor_profile', component:VendorProfileComponent},
      { path:'vendor_editprofile', component:VendorEditprofileComponent},
      { path:'vendor_changeprofile_status', component:VendorChangeprofileStatusComponent},
      { path:'vendor_orderhistory', component:VendorOrderhistoryComponent},
      { path:'vendor_onlineservices', component:VendorOnlineservicesComponent},
      { path:'vendor_list_allservices', component:VendorListAllservicesComponent},
      { path:'vendor_add_service', component:VendorAddServiceComponent},
      { path:'vendor_edit_service', component:VendorEditServiceComponent},
      { path:'vendor_onlineservices_changestatus', component:VendorOnlineservicesChangestatusComponent},
      { path:'vendor_onlineservices_changestatus_courses', component:VendorOnlineservicesChangestatusCoursesComponent},
      { path:'vendor_onlineservices_changestatus_service', component:VendorOnlineservicesChangestatusServiceComponent},
      { path:'sucessful_updation_v', component:SucessfulUpdationVComponent},
      { path:'edit_service_form',component:EditServiceFormComponent},
      { path:'vendor_add_service_sucessfully', component:VendorAddServiceSucessfullyComponent}
    ]
  },
  { path:'l_layout', component:LLayoutComponent,
  canActivate:[AuthenticationGuard],
    children:[
      {path:'', component:LearnerHomeComponent},
      {path:'learner_home', component:LearnerHomeComponent},
      { path:'learner_search', component:LearnerSearchComponent},
      { path:'about_us', component:AboutUsComponent},
      { path:'our_team', component:OurTeamComponent},
      { path:'learner_profile', component:LearnerProfileComponent},
      { path:'learner_editprofile', component:LearnerEditprofileComponent},
      { path:'learner_subscription', component:LearnerSubscriptionComponent},
      { path:'learner_changestatus', component:LearnerChangestatusComponent},
      { path:'learner_availedservices', component:LearnerAvailedservicesComponent},
      { path:'learner_history', component:LearnerHistoryComponent},
      { path:'learner_onlineservicespage', component:LearnerOnlineservicespageComponent},
      { path:'learner_listof_services', component:LearnerListofServicesComponent},
      { path:'learner_show_newcourses', component:LearnerShowNewcoursesComponent},
      { path:'sucessful_updation_l', component:SucessfulUpdationLComponent},
      { path:'purchase_sucesfull', component:PurchaseSucesfullComponent},
      { path:'learner_course_description', component:LearnerCourseDescriptionComponent},
      { path:'learner_write_review', component:LearnerWriteReviewComponent},
      { path:'learner_list_review', component:LearnerListReviewComponent},
      { path:'learner_view_review',component:LearnerViewReviewComponent},
      { path:'learner_comleted_sucessfully',component:LearnerCompletedSucessfullyComponent}
    ]
  },
  { path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

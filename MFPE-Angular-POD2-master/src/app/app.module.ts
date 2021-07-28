import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthguardServiceService } from './authguard-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ALoginComponent } from './a-login/a-login.component';
import { VLoginComponent } from './v-login/v-login.component';
import { LLoginComponent } from './l-login/l-login.component';
import { ALayoutComponent } from './a-layout/a-layout.component';
import { VLayoutComponent } from './v-layout/v-layout.component';
import { LLayoutComponent } from './l-layout/l-layout.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminUpdateUserComponent } from './admin-update-user/admin-update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AVendorHomeComponent } from './a-vendor-home/a-vendor-home.component';
import { AVendorProfileComponent } from './a-vendor-profile/a-vendor-profile.component';
import { AVendorEditprofileComponent } from './a-vendor-editprofile/a-vendor-editprofile.component';
import { AVendorAddServiceComponent } from './a-vendor-add-service/a-vendor-add-service.component';
import { AVendorChangeprofileStatusComponent } from './a-vendor-changeprofile-status/a-vendor-changeprofile-status.component';
import { AVendorEditServiceComponent } from './a-vendor-edit-service/a-vendor-edit-service.component';
import { AVendorListAllservicesComponent } from './a-vendor-list-allservices/a-vendor-list-allservices.component';
import { AVendorOnlineServicesComponent } from './a-vendor-online-services/a-vendor-online-services.component';
import { AVendorOnlineservicesChangestatusCoursesComponent } from './a-vendor-onlineservices-changestatus-courses/a-vendor-onlineservices-changestatus-courses.component';
import { AVendorOnlineservicesChangestatusServiceComponent } from './a-vendor-onlineservices-changestatus-service/a-vendor-onlineservices-changestatus-service.component';
import { AVendorOnlineservicesChangestatusComponent } from './a-vendor-onlineservices-changestatus/a-vendor-onlineservices-changestatus.component';
import { AVendorOrderhistoryComponent } from './a-vendor-orderhistory/a-vendor-orderhistory.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { VendorHeaderComponent } from './vendor-header/vendor-header.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorOrderhistoryComponent } from './vendor-orderhistory/vendor-orderhistory.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';
import { VendorEditprofileComponent } from './vendor-editprofile/vendor-editprofile.component';
import { VendorChangeprofileStatusComponent } from './vendor-changeprofile-status/vendor-changeprofile-status.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorOnlineservicesComponent } from './vendor-onlineservices/vendor-onlineservices.component';
import { VendorListAllservicesComponent } from './vendor-list-allservices/vendor-list-allservices.component';
import { VendorAddServiceComponent } from './vendor-add-service/vendor-add-service.component';
import { VendorEditServiceComponent } from './vendor-edit-service/vendor-edit-service.component';
import { VendorOnlineservicesChangestatusComponent } from './vendor-onlineservices-changestatus/vendor-onlineservices-changestatus.component';
import { VendorOnlineservicesChangestatusCoursesComponent } from './vendor-onlineservices-changestatus-courses/vendor-onlineservices-changestatus-courses.component';
import { VendorOnlineservicesChangestatusServiceComponent } from './vendor-onlineservices-changestatus-service/vendor-onlineservices-changestatus-service.component';
import { LearnerHomeComponent } from './learner-home/learner-home.component';
import { LearnerHeaderComponent } from './learner-header/learner-header.component';
import { LearnerProfileComponent } from './learner-profile/learner-profile.component';
import { LearnerEditprofileComponent } from './learner-editprofile/learner-editprofile.component';
import { LearnerSubscriptionComponent } from './learner-subscription/learner-subscription.component';
import { LearnerChangestatusComponent } from './learner-changestatus/learner-changestatus.component';
import { LearnerAvailedservicesComponent } from './learner-availedservices/learner-availedservices.component';
import { LearnerHistoryComponent } from './learner-history/learner-history.component';
import { LearnerOnlineservicespageComponent } from './learner-onlineservicespage/learner-onlineservicespage.component';
import { LearnerListofServicesComponent } from './learner-listof-services/learner-listof-services.component';
import { LearnerShowNewcoursesComponent } from './learner-show-newcourses/learner-show-newcourses.component';
import { LearnerSearchComponent } from './learner-search/learner-search.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegisterSucessfulComponent } from './register-sucessful/register-sucessful.component';
import { SucessfulUpdationComponent } from './sucessful-updation/sucessful-updation.component';
import { SucessfulUpdationLComponent } from './sucessful-updation-l/sucessful-updation-l.component';
import { SucessfulUpdationVComponent } from './sucessful-updation-v/sucessful-updation-v.component';
import { SucessfulUpdationAComponent } from './sucessful-updation-a/sucessful-updation-a.component';
import { AdminAddnewUserComponent } from './admin-addnew-user/admin-addnew-user.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { RegistrationPageLComponent } from './registration-page-l/registration-page-l.component';
import { EditServiceFormComponent } from './edit-service-form/edit-service-form.component';
import { AVeditServiceFormComponent } from './a-vedit-service-form/a-vedit-service-form.component';
import { PurchaseSucesfullComponent } from './purchase-sucesfull/purchase-sucesfull.component';
import { LearnerCourseDescriptionComponent } from './learner-course-description/learner-course-description.component';
import { VendorAddServiceSucessfullyComponent } from './vendor-add-service-sucessfully/vendor-add-service-sucessfully.component';
import { AVendorAddServiceSucessfullyComponent } from './a-vendor-add-service-sucessfully/a-vendor-add-service-sucessfully.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearnerWriteReviewComponent } from './learner-write-review/learner-write-review.component';
import { LearnerListReviewComponent } from './learner-list-review/learner-list-review.component';
import { LearnerSubmittedSucessfullComponent } from './learner-submitted-sucessfull/learner-submitted-sucessfull.component';
import { LearnerViewReviewComponent } from './learner-view-review/learner-view-review.component';
import { AuthenticationGuard } from './authentication.guard';
import { ARegisterSucessfulComponent } from './a-register-sucessful/a-register-sucessful.component';
import { LearnerCompletedSucessfullyComponent } from './learner-completed-sucessfully/learner-completed-sucessfully.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ALoginComponent,
    VLoginComponent,
    LLoginComponent,
    ALayoutComponent,
    VLayoutComponent,
    LLayoutComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminSearchComponent,
    AdminAddUserComponent,
    AdminUpdateUserComponent,
    AVendorHomeComponent,
    AVendorProfileComponent,
    AVendorEditprofileComponent,
    AVendorChangeprofileStatusComponent,
    AVendorOrderhistoryComponent,
    AVendorOnlineServicesComponent,
    AVendorListAllservicesComponent,
    AVendorAddServiceComponent,
    AVendorEditServiceComponent,
    AVendorOnlineservicesChangestatusComponent,
    AVendorOnlineservicesChangestatusCoursesComponent,
    AVendorOnlineservicesChangestatusServiceComponent,
    AboutUsComponent,
    OurTeamComponent,
    VendorHeaderComponent,
    VendorHomeComponent,
    VendorOrderhistoryComponent,
    VendorSearchComponent,
    VendorEditprofileComponent,
    VendorChangeprofileStatusComponent,
    VendorProfileComponent,
    VendorOnlineservicesComponent,
    VendorListAllservicesComponent,
    VendorAddServiceComponent,
    VendorEditServiceComponent,
    VendorOnlineservicesChangestatusComponent,
    VendorOnlineservicesChangestatusCoursesComponent,
    VendorOnlineservicesChangestatusServiceComponent,
    LearnerHomeComponent,
    LearnerHeaderComponent,
    LearnerProfileComponent,
    LearnerEditprofileComponent,
    LearnerSubscriptionComponent,
    LearnerChangestatusComponent,
    LearnerAvailedservicesComponent,
    LearnerHistoryComponent,
    LearnerOnlineservicespageComponent,
    LearnerListofServicesComponent,
    LearnerShowNewcoursesComponent,
    LearnerSearchComponent,
    RegistrationPageComponent,
    RegisterSucessfulComponent,
    SucessfulUpdationComponent,
    SucessfulUpdationLComponent,
    SucessfulUpdationVComponent,
    SucessfulUpdationAComponent,
    AdminAddnewUserComponent,
    AdminUserListComponent,
    RegistrationPageLComponent,
    EditServiceFormComponent,
    AVeditServiceFormComponent,
    PurchaseSucesfullComponent,
    LearnerCourseDescriptionComponent,
    VendorAddServiceSucessfullyComponent,
    AVendorAddServiceSucessfullyComponent,
    PageNotFoundComponent,
    LearnerWriteReviewComponent,
    LearnerListReviewComponent,
    LearnerSubmittedSucessfullComponent,
    LearnerViewReviewComponent,
    ARegisterSucessfulComponent,
    LearnerCompletedSucessfullyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthguardServiceService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

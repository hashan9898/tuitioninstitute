import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { TeacherRegisterComponent } from './components/teacher-register/teacher-register.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent} from './components/teacher-dashboard/teacher-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { AuthGuard } from './auth.guard';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InstituteRegisterComponent } from './components/institute-register/institute-register.component';
import { InstituteDashboardComponent } from './components/institute-dashboard/institute-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'student-register',
    component: StudentRegisterComponent
  },
  {
    path: 'teacher-register',
    component: TeacherRegisterComponent
  },
  {
    path: 'student-dashboard/:id',
    component: StudentDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-dashboard/:id',
    component: TeacherDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'student-profile/:id',
    component: StudentProfileComponent
  },
  {
    path: 'teacher-profile/:id',
    component: TeacherProfileComponent
  },
  {
    path: 'single-lesson',
    component: SingleLessonComponent
  },
  {
    path: 'cart',
    component: CartComponent
   },
   {
    path: 'checkout',
    component: CheckoutComponent
   },
   {
     path: 'institute-register',
     component: InstituteRegisterComponent
  },
  {
    path: 'institute-dashboard/:id',
    component: InstituteDashboardComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

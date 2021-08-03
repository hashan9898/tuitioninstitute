import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './auth.guard';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatStepperModule} from '@angular/material/stepper';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatVideoModule } from 'mat-video'

import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { TeacherRegisterComponent } from './components/teacher-register/teacher-register.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherService } from './services/teacher.service';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseService } from './services/course.service';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { SingleLessonComponent } from './components/single-lesson/single-lesson.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InstituteRegisterComponent } from './components/institute-register/institute-register.component';
import { InstituteService } from './services/institute.service';
import { InstituteDashboardComponent } from './components/institute-dashboard/institute-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentRegisterComponent,
    TeacherRegisterComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    StudentProfileComponent,
    TeacherProfileComponent,
    FilterPipe,
    SortPipe,
    SingleLessonComponent,
    CartComponent,
    CheckoutComponent,
    InstituteRegisterComponent,
    InstituteDashboardComponent


  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatIconModule,
    MaterialFileInputModule,
    MatVideoModule,

  ],
  providers: [StudentService, TeacherService, CourseService, InstituteService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



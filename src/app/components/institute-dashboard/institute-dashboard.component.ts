import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from 'src/app/services/institute.service';
import { CourseService } from 'src/app/services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css']
})
export class InstituteDashboardComponent implements OnInit {

  course: any;

  name: string = "";
  _id: string;
  courses: any[] = [];
  teacherMap: Map<string, any> = new Map();
  studentId: string;
  teacher = '';
  Subject= '';

  logout() {
    this.instituteService.logout().subscribe(data => {
      if (data) {
        this.router.navigate(['login']);
      } else {
        window.alert('Logout error')
      }
    })
  }

  deletee(_id: string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.courseService.delete(_id).subscribe(data => {
            console.log(data);
            this.courseService.getAllCources().subscribe(prods => {
              this.courses = prods as any;
              const teacherIds: string[] = this.courses.map(course => course.teacherId);
              teacherIds.forEach(id => {
                this.teacherService.getTeacherById(id).subscribe((data: any) => {
                  this.teacherMap.set(id, data);
                });
              })
            });
          },
          error =>{
             console.log(error);
          });
        }
    }


  constructor(private readonly router: Router,
              private readonly instituteService: InstituteService,
              private readonly courseService: CourseService,
              private readonly teacherService: TeacherService,
               private route: ActivatedRoute,) { }

  ngOnInit(): void {



    this.courseService.getAllCources().subscribe(prods => {
      this.courses = prods as any;
      const teacherIds: string[] = this.courses.map(course => course.teacherId);
      teacherIds.forEach(id => {
        this.teacherService.getTeacherById(id).subscribe((data: any) => {
          this.teacherMap.set(id, data);
        });
      })
    });

  }

}

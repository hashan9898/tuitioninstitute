import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseDetails } from '../components/teacher-dashboard/course.model';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }

  save(course: CourseDetails) {
    return this.http.post('http://localhost:3000/api/courses', course)
  }

  findByTeacherId(teacherId: string) {
    let params = new HttpParams();
    params = params.append('teacherId', teacherId);
    return this.http.get('http://localhost:3000/api/findByTeacherId', { params: params });
  }

  getAllCources(){
    return this.http.get('http://localhost:3000/api/courses');
  }
  getCourseById(courseId: string){
    return this.http.get('http://localhost:3000/api/singlelesson/' + courseId);
  }
  delete(_id: string){
    return this.http.delete('http://localhost:3000/api/course'+`/${_id}`);
  }
}

import { Injectable } from '@angular/core';
import { API_URL } from '../const/url';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = `${API_URL}/User`;
  COURSE_URL = `${API_URL}/Course`;
  constructor(private httpClient: HttpClient) {}
  getById(id: string): Observable<any> {
    return this.httpClient.get(this.URL + '/GetById?id=' + id);
  }
  getAllCourseByUserId(userId: string): Observable<any> {
    return this.httpClient.get(
      this.COURSE_URL + '/GetAllCourseByUserId?UserId=' + userId
    );
  }
  registerCourse(body: any): Observable<any> {
    return this.httpClient.post(this.COURSE_URL + '/RegisterCourse', body);
  }
  updateInfo(body: any): Observable<any> {
    return this.httpClient.post(this.URL + '/Update', body);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../const/url';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  URL = `${API_URL}/Question`;
  constructor(private http: HttpClient) {}
  detailQuestion(questionId: string): Observable<any> {
    return this.http.get(this.URL + '/Detail?questionId=' + questionId);
  }
  removeQuestion(questionId: string): Observable<any> {
    return this.http.delete(this.URL + '/Remove?questionId=' + questionId);
  }
  addQuestion(body: any): Observable<any> {
    return this.http.post(this.URL + '/Add', body);
  }
  updateQuestion(body: any): Observable<any> {
    return this.http.post(this.URL + '/Update', body);
  }
}

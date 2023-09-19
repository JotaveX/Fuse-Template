import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costumer } from './costumer.model';

const baseUrl = 'http://localhost:8243/customers/v1/Customers';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Costumer[]> {
    return this.http.get<Costumer[]>(baseUrl);
  }

  getLastName(lastName: any): Observable<Costumer[]> {
    return this.http.get<Costumer[]>(`${baseUrl}?lastName=${lastName}`);
    }

  get(id: any): Observable<Costumer> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
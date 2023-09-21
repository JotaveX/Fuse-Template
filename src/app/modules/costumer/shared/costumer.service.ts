import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costumer } from './costumer.model';

const baseUrl = 'http://localhost:8243/customers/v1/Customers';
const credentials = {
  username: 'admin',
  password: 'admin',
  clientId: 'Yzk5ZjY5ZjMtZjY5Zi00',
  clientSecret: 'Yzk5ZjY5ZjMtZjY5Zi00',
  grantType: 'password',
}
const headers = new HttpHeaders({
  'Authorization': 'bearer' + `${credentials.clientId}:${credentials.clientSecret}`
})


@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Costumer[]> {
    return this.http.get<Costumer[]>(baseUrl);
  }

  getLastName(lastName: any): Observable<Costumer[]> {
    return this.http.get<Costumer[]>(`${baseUrl}?lastName=${lastName}`, { headers });
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
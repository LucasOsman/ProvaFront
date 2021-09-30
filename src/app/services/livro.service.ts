import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:5001/api/v1/Livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl+"/List");
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl+"/Post", data);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/interfaces/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private url = "http://localhost:8080/";
 
  constructor(private http: HttpClient) { }
 
  // Add Carro - Create
  addcarro(carro: Carro){
    return this.http.post<Carro>(`${this.url}addcarro`, carro)
  }
 
  // Get Carros - Read
  getCarros(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'carros')
  }
 
  // Get Carro by Id - Read
  getCarroById(id: number): Observable<Carro>{
    return this.http.get<Carro>(`${this.url}carro/${id}`)
  }
 
  // Update User - Update
  updateCarro(id?: number ,carro?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, carro)
  }
 
  // Delete User - Delete
  deleteCarro(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }
 
}


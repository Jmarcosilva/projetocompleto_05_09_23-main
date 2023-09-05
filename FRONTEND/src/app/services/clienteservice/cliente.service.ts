import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = "http://localhost:8080/";
 
  constructor(private http: HttpClient) { }
 
  // Add Cliente - Create
  addcliente(cliente: Cliente){
    return this.http.post<Cliente>(`${this.url}addcliente`, cliente)
  }
 
  // Get cliente - Read
  getCliente(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'cliente')
  }
 
  // Get cliente by Id - Read
  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}cliente/${id}`)
  }
 
  // Update cliente - Update
  updateCliente(id?: number ,cliente?: any): Observable<any>{
    return this.http.put<any>(`${this.url}updatecliente/${id}`, cliente)
  }
 
  // Delete cliente - Delete
  deleteCliente(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}deletecliente/${id}`)
  }
 
}


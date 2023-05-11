import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { MensajePrimero, MensajeProspecto, Primero, Prospecto } from '../models/model/model';

@Injectable({
  providedIn: 'root'
})
export class BackinfoService {

  private apiUrl: string = 'http://127.0.0.1:8000/api/'
  constructor(private http : HttpClient) { }

  getPrimero(): Observable<MensajePrimero>{
    const url = `${this.apiUrl}primeros/`;
    return this.http.get<MensajePrimero>(url);
  }
  postPrimero(prim:Primero): Observable<object>{
    const url = `${this.apiUrl}primeros/`;
    return this.http.post(url, prim);
  }
  getProspecto(): Observable<MensajeProspecto>{
    const url = `${this.apiUrl}prospectos/`;
    return this.http.get<MensajeProspecto>(url);
  }
  postProspecto(pros:Prospecto): Observable<object>{
    const url = `${this.apiUrl}prospectos/`;
    return this.http.post(url, pros);
  }


}

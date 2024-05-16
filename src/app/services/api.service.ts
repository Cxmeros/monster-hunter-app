import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Monster } from '../models/monster.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://mhw-db.com/monsters';


  getMonsters():Observable<Monster[]> {
    return this._http.get<Monster[]>(`${this.urlBase}?q={"type":"Large"}`);
  }

  getMonster(id: number):Observable<Monster> {
    return this._http.get<Monster>(`${this.urlBase}/${id}`);
  }
}

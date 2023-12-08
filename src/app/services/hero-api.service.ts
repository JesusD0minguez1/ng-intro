import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  constructor(private http: HttpClient)
  {
  }

  baseURL = 'https://overfast-api.tekrop.fr/heroes';

  getHeroesByRole(role?: string){
    const url = this.baseURL + '?role=' + role;
    return this.http.get(url);
  }

  getHeroes() {
    return this.http.get(this.baseURL); //calling private http client
  }

}

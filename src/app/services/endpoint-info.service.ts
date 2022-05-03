import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointInfoService {

  endpointURL = environment.endpointURL;

  constructor(private http: HttpClient) { }

  getPokemons(index: any){
    return this.http.get<any>(`${this.endpointURL}/pokemon/${index}`);
  }
}
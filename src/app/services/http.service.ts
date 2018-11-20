import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base_url = "https://data.fixer.io/api/";
  API_key = "?access_key=2e5f9c09a51ac6a206f2f35a6c557890"; //API key from fixer.io
  constructor(private http: Http) { }

  getData(url: string, query: string = "") {
    console.log(`${this.base_url}${url}${this.API_key}${query}`);
    // return this.http.get(`${this.base_url}${url}${this.API_key}${query}`).pipe(map(data => {
    //   console.log(data.json())
    //   return data.json();
    // }));
  }
  
}

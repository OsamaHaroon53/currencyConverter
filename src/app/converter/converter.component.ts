import { Component, OnInit } from '@angular/core';
import { currencyconvert } from "./model";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators'
import { a } from "./sample";
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  base_url = "https://data.fixer.io/api/";
  API_key = "?access_key=2e5f9c09a51ac6a206f2f35a6c557890"
  currencyname;
  constructor(private http: Http) { }
  currency = new currencyconvert("", null, "");
  convert() {
    // this.getData("latest","&base="+this.currency.from+"&symbols="+this.currency.to).subscribe(data => {
    //   console.log(data);
    // });
  }
  getData(url: string, query: string = "") {
    console.log(`${this.base_url}${url}${this.API_key}${query}`);
    // return this.http.get(`${this.base_url}${url}${this.API_key}${query}`).pipe(map(data => {
    //   console.log(data.json())
    //   return data.json();
    // }));
  }
  ngOnInit() {
    // this.getData("symbols").subscribe(data => {
    //   console.log('data2');
    //   if (data['success']) {
    //     console.log(data);
    //     this.currencyname = data['symbols'];
    //   }
    // });
  }
}

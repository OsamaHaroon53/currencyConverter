import { Component, OnInit } from '@angular/core';
import { currencyconvert } from "./model";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators'
import { DummyData } from "./sample";
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  base_url = "https://data.fixer.io/api/";
  API_key = "?access_key=2e5f9c09a51ac6a206f2f35a6c557890"
  currencyName: Array<string> = [];
  currencySymbols: Array<string> = [];
  currency = new currencyconvert("", null, "");
  constructor(private http: Http) { }
  a = []; b = [];

  convert() {
    this.getData("latest");
    // this.getData("latest","&base="+this.currency.from+"&symbols="+this.currency.to).subscribe(data => {
    //   console.log(data);
    // });
  }

  convertObjectToArray(currency): void {
    for (var key in currency) {
      this.currencySymbols.push(key);
      this.currencyName.push(currency[key]);
    }
  }

  getData(url: string, query: string = "") {
    console.log(`${this.base_url}${url}${this.API_key}${query}`);
    if (url === "symbols") {
      this.convertObjectToArray(DummyData.currency['symbols']);
    } else{
      
    }
    // return this.http.get(`${this.base_url}${url}${this.API_key}${query}`).pipe(map(data => {
    //   console.log(data.json())
    //   return data.json();
    // }));
  }

  ngOnInit() {
    this.getData("symbols");
    // this.getData("symbols").subscribe(data => {
    //   console.log('data2');
    //   if (data['success']) {
    //     console.log(data);
    //     this.currencyName = data['symbols'];
    //   }
    // });
  }

}

import { Component, OnInit } from '@angular/core';
import { DummyData } from "./sample";
import { HttpService } from "../services/http.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currencyName: Array<string> = [];
  currencySymbols: Array<string> = [];

  constructor(private http: HttpService) { }

  convert(currency) {
    this.http.getData("convert", "&from=" + currency.from + "&to=" + currency.to + "&amount=" + currency.amount);
    // this.getData("convert","&from="+this.currency.from+"&to="+this.currency.to+"&amount="+this.currency.amount).subscribe(data => {
    //   console.log(data);
    // });
  }

  convertObjectToArray(currency): void {
    for (var key in currency) {
      this.currencySymbols.push(key);
      this.currencyName.push(currency[key]);
    }
  }

  ngOnInit() {
    this.http.getData("symbols");
    this.convertObjectToArray(DummyData.currency['symbols']);
    // this.getData("symbols").subscribe(data => {
    //   if (data['success']) {
    //     console.log(data);
    //     this.convertObjectToArray(data['symbols']);
    //   }
    //   else{
    //     //for error handling
    //   }
    // });
  }

}

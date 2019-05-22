import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostGetService {
  url:string;
  apikey:string ="MFBQTWW5EST2P1W9";
  constructor(private httpclient:HttpClient){ 

  }
  getRealtimeExchangeRate(fromCurrency:string,toCurrency:string ){
    this.url="https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+fromCurrency+"&to_currency="+toCurrency+"&apikey="+this.apikey;
    return this.httpclient.get(this.url).subscribe((data)=>{
      //解析
    })
  }
  getInterDayExchangeRate(fromCurrency:string,toCurrency:string ){
    this.url="https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol="+fromCurrency+"&to_symbol="+toCurrency+"&interval=5min&apikey="+this.apikey;
    return this.httpclient.get(this.url).subscribe((data)=>{
      //解析
    })
  }
  getDailyExchangeRate(fromCurrency:string,toCurrency:string ){
    this.url="https://www.alphavantage.co/query?function=FX_DAILY&from_symbol="+fromCurrency+"&to_symbol="+toCurrency+"&apikey="+this.apikey;
    return this.httpclient.get(this.url).subscribe((data)=>{

    })
  }
  getWeaklyExchangeRate(fromCurrency:string,toCurrency:string ){
    this.url="https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol="+fromCurrency+"&to_symbol="+toCurrency+"&apikey="+this.apikey;
    return this.httpclient.get(this.url).subscribe((data)=>{

    })
  }
  getMonthlyExchangeRate(fromCurrency:string,toCurrency:string ){
    this.url="https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol="+fromCurrency+"&to_symbol="+toCurrency+"&apikey="+this.apikey;
    return this.httpclient.get(this.url).subscribe((data)=>{

    })
  }
  
  
    
}

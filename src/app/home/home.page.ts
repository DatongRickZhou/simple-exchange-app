import { Component, OnInit } from '@angular/core';
import {user,currency} from '../models/model';
import { CurrencyList } from '../models/Currencylist';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {AlertController,ActionSheetController} from '@ionic/angular'
import {Router} from '@angular/router';
import { DataService } from '../data.service';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user:user;
  currency:any = CurrencyList;
  currency1:any = null;
  currency2:any = null;
  currency1code:string;
  currency2code:string;
  ctx = document.getElementById('myChart');
  exchangeRate:number;
  currency1amount:number;
  currency2amount:number;
  UserCurrencys:currency[];
  
  
  constructor(private http:HttpClient
    ,private alert:AlertController
    ,private router:Router,
    private dataservice:DataService
    ){
  }
  ngOnInit(){
    //this.dataservice.createUserProfile();
  }
  changecurrency1($event) {
    this.currency1code=this.currency1;
    
  }
  changecurrency2($event) {
    this.currency2code=this.currency2;
  }
  CheckChangeRate(){
    if(this.currency1code!=null && this.currency2code!=null)
    {
      const params = new HttpParams();
      params.set( 'function','CURRENCY_EXCHANGE_RATE');
      params.set('from_currency',this.currency1code);
      params.set('to_currency',this.currency2);
      params.set('apikey','MFBQTWW5EST2P1W9');
      this.http.get(
        'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
      +this.currency1code+'&to_currency='+this.currency2code+'&apikey=MFBQTWW5EST2P1W9',
      {
        headers:new HttpHeaders(
          {
            'Content-Type':'application/x-www-form-urlencoded'
          })
      }).subscribe((res)=>{
        this.exchangeRate=res["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        this.currency2amount=this.currency1amount*this.exchangeRate;
        console.log(this.exchangeRate);
    })
  }
  else{
    this.presentAlert();
    }
  }
  Goprofile(){
    this.router.navigate(['/userprofile'])
  }
  GoExchangepage(){
    
  }
  async presentAlert(){
    const alert = await this.alert.create({
      header: 'Alert',
      message: 'Currency 1  or 2 not selected!',
      buttons: ['OK']
    });
    await alert.present();
  }
}


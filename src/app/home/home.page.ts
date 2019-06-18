import { Component } from '@angular/core';
import {user,currency} from '../models/model';
import { CurrencyList } from '../models/Currencylist';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:user;
  currency:any = CurrencyList;
  
  currency1:string;
  currency2:string;
  
  constructor(){

  }
  init(){
   
  }
  change($event){
    this.currency1=$event;
   
      

    
    console.log(this.currency1);

  }

  
  
}


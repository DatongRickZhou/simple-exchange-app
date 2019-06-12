import { Component } from '@angular/core';
import {user} from '../models/model';
import { CurrencyList } from '../models/Currencylist';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:user;
  currency:any = CurrencyList;
  constructor(){

  }
  init(){
   
  }
  
}

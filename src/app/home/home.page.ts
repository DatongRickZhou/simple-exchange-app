import { Component, OnInit } from '@angular/core';
import {user,currency} from '../models/model';
import { CurrencyList } from '../models/Currencylist';
import {AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http';




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

  
  constructor(private authService:AuthService,private http:HttpClient){

  }
  ngOnInit(){
   
  }
  changecurrency1($event) {
    this.currency1code=this.currency1;
  }
  changecurrency2($event) {
    this.currency2code=this.currency2;
  }
  CheckChangeRate(){

  }

  
  
}


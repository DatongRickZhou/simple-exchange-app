import { Injectable } from '@angular/core';
import {SelectedCurrencys, currency} from '../app/models/model'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  SelectedCurrencys:SelectedCurrencys;
  User:any;
  listKey:string = 'SavedCurrency';
  userKey:string = 'currentUser';
  constructor() { 
    
  }
  SaveSlelectedCurrencys( fromCN:string,fromCC:string,toCN:string,toCC:string){
    let selectedCurrencys:SelectedCurrencys = {FromCurrencyCode: fromCC,FromCurrencyName:fromCN,ToCurrencyCode:toCC,ToCurrencyName:toCN};
    this.SelectedCurrencys=selectedCurrencys;
    this.saveList();
  }
  LoadUser(){
    return new Promise( (resolve,reject) => {
      try{
        let data:any = JSON.parse( localStorage.getItem( this.userKey ) );
        if( data ){
          this.User = data;
          resolve( data );
        }
        else{
          throw('no data for the requested key');
        }
      }
      catch( error ){
        reject( error );
      }
    });
  }
  SaveUserInsession(user:any){
    let currentuser:any=user;
    this.User = currentuser;
    this.SaveUser();
  }
  SaveUser(){
    return new Promise( (resolve,reject) => {
      try{
        localStorage.setItem( this.userKey , JSON.stringify(this.User) );
        if( localStorage.getItem( this.userKey ) ){
          //data can be read, so resolve true
          resolve( true );
        }
        else{
          throw('data write failed');
        }
      }
      catch(error){
        reject( error );
      }
    });
  }
  saveList(){
    return new Promise( (resolve,reject) => {
      try{
        localStorage.setItem( this.listKey , JSON.stringify(this.SelectedCurrencys) );
        if( localStorage.getItem( this.listKey ) ){
          //data can be read, so resolve true
          resolve( true );
        }
        else{
          throw('data write failed');
        }
      }
      catch(error){
        reject( error );
      }
    });
  }

  readList(){
    return new Promise( (resolve,reject) => {
      try{
        let data:SelectedCurrencys = JSON.parse( localStorage.getItem( this.listKey ) );
        if( data ){
          this.SelectedCurrencys = data;
          resolve( data );
        }
        else{
          throw('no data for the requested key');
        }
      }
      catch( error ){
        reject( error );
      }
    });
  }

}

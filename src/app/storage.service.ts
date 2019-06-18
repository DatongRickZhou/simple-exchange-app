import { Injectable } from '@angular/core';
import {Item} from '../app/models/item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  list:Array<Item> = [];
  list$ = new BehaviorSubject<Item[]>(this.list);
  listKey:string = 'items';
  constructor() { 
    this.readList()
    .then( (data:Array<Item>) => { 
      this.list = data;
      this.list$.next( this.list );
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  //filter items by status
  getFilteredList( status:boolean ){
    let data:Array<Item> = this.list.filter((item)=>{
      return item.status == status;
    });
    return data;
  }
  sortList( data:Array<Item>, sortBy:string ){
    // assuming data is homogenous (all same type)
    // get keys of the first item
    let objKeys:Array<string> = Object.keys( data[0] );
    let sortKey:Array<string> = [];
    if( objKeys.length ){
      //find a matching key by filtering
      sortKey = objKeys.filter((objKey)=>{
        if( objKey == sortBy ){
          return objKey;
        }
      });
      if( sortKey.length == 1 ){
        data.sort((item1,item2) => {
            return item2[sortKey[0]] - item1[sortKey[0]];
        });
      }
    }
  }
  addItem( name:string,latitude:number,longitude:number ){
    let item:Item = {name: name, id: new Date().getTime(), done: 0, status: false,latitude,longitude};
    this.list.push( item );
    this.list$.next(this.list);
    this.saveList();
  }
  
  deleteItem( id:number ){
    return new Promise( (resolve,reject) => {
      this.list.forEach( ( item, index ) => {
        if( item.id == id ){
          this.list.splice( index, 1 );
          this.list$.next(this.list);
          resolve( true );
        }
      });
      reject( new Error('item not found') );
    });
  }
  toggleItemStatus( id:number ){
    return new Promise( (resolve,reject) => {
      this.list.forEach( ( item, index ) => {
        if( item.id == id ){
          if( item.status == false ){
            item.status = true;
            item.done = new Date().getTime();
          }
          else{
            item.status = false;
            item.done = null;
          }
          this.list$.next(this.list);
          resolve(true);
          return;
        }
      });
      this.saveList();
      resolve(false);
    });
  }
  saveList(){
    return new Promise( (resolve,reject) => {
      try{
        localStorage.setItem( this.listKey , JSON.stringify(this.list) );
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
        let data:Array<Item> = JSON.parse( localStorage.getItem( this.listKey ) );
        if( data ){
          this.list = data;
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
  destroyData(){
    this.list = [];
    this.saveList()
    .then(( response ) => {
      return response;
    })
    .catch(( error ) => {
      return false;
    });
    //call list$ to broadcast the new empty array to subscribers
    this.list$.next(this.list);
  }
}

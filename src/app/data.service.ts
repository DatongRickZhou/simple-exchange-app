import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { from, Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uid:string;
  notes:Observable<any[]>;
  constructor(private afDb:AngularFireDatabase, private afAuth:AngularFireAuth){
    this.init();
   }
  init(){
    this.afAuth.authState.subscribe((user)=>{
      if(user){
        this.uid = user.uid;
        this.readData();
      }
    });
  }
  readData(){
    let notesRef = this.afDb.list(`notes/${this.uid}`);
    this.notes = notesRef.valueChanges();
  }
}

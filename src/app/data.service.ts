import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { currency } from './models/model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  uid:string;
  currency:currency;
  userProfilePath:string;
  userDoc;
  
  
  constructor(private fireStore: AngularFirestore, private afAuth:AngularFireAuth){
    this.init();
   }

  init(){
    this.afAuth.authState.subscribe((user)=>{
      if(user){
        this.uid = user.uid;
        this.userProfilePath= "/userProfile/"+this.uid;
      }
    });
  }
  createUserProfile(){
    this.userDoc = this.fireStore.doc<any>(this.userProfilePath);
  }
  readacurrency(){
    
  }
  
}

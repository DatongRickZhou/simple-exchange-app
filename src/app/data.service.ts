import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
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
    this.createUserProfile()
  }
  createUserProfile(){
    this.userDoc = this.fireStore.doc<any>(this.userProfilePath);
      this.userDoc.set({
        CurrencyCode: 'USD',
        amount: 0,
        // Other info you want to add here
      })
    
  }
  readacurrency(){
    
  }
  
}

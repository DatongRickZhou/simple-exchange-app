import { Component } from '@angular/core';
import {user} from '../models/model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:user;
  constructor(){

  }
  init(){

  }
  
}

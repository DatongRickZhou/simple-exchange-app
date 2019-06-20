import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router,private fdb:AngularFireDatabase) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  signUp(formData){
    console.log(formData);
    this.authService.signUp(formData.email,formData.password).then((response)=>{
      console.log(response);
      this.router.navigate(['/home']);
    }
    )
    .catch((error)=>{
      console.log(error);
    })
    
  }
  

}

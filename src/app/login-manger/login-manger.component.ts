import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, Validators } from "@angular/forms";
import { GetMangerService } from '../get-manger.service';
import { Router } from '@angular/router';
import { Manger } from '../manger';

@Component({
  selector: 'app-login-manger',
  templateUrl: './login-manger.component.html',
  styleUrls: ['./login-manger.component.scss']
})
export class LoginMangerComponent implements OnInit {

 mangersData:any;
 isSuccesfullLogged:boolean = false;
  constructor(public fb: FormBuilder, private route:Router, private getService:GetMangerService) { }

  myLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ['', [Validators.required]]
  });
  ngOnInit(): void {
    this.getService.on<Manger[]>().subscribe(data =>{
      this.mangersData = data;
   })
  }

  loggedInForm() {
    if(this.mangersData!= undefined && this.mangersData!= null){
      
      this.mangersData.forEach(mang => {
        if(mang.email == this.myLoginForm.value.email && mang.password == this.myLoginForm.value.password){
          
          this.isSuccesfullLogged = true;
        }
      });
      if(this.isSuccesfullLogged){
        this.route.navigate(['home']);
      }else{
       alert('Credentials not correct');
       this.myLoginForm.reset();
      }
    }
  }

  get myFormControl() {
    return this.myLoginForm.controls;
  }


}

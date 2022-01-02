import { Component, ViewChild, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, Validators } from "@angular/forms";
import { GetMangerService } from '../get-manger.service';
import { Router } from '@angular/router';
import { Manger } from '../manger';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 
  availableData;
  isAvailableEmail: boolean;
  
  constructor(public fb: FormBuilder, private getManger: GetMangerService, private router: Router) { }

  ngOnInit(): void {
    this.isAvailableEmail= false;
    this.getManger.getMangerList().subscribe(res =>{
      this.availableData = res;
      this.getManger.emit<any>(this.availableData);
    });
  }
  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    password: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dob: ['', [Validators.required]]

  });
  submitForm() {
    this.getManger.addManger(this.myForm.value).subscribe(data =>{
      this.router.navigate(['login']);
    });
  }

  get myFormControl() {
    return this.myForm.controls;
  }
  onChangeEmail(e,data){
    this.availableData.forEach(maneger => {
        if(data === maneger.email){
          this.isAvailableEmail = true;
          return true;
        }
    });
  }
  emailValidator(){
    
  }




}

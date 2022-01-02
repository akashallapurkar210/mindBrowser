import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from "@angular/forms";

import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})

export class EditEmpComponent implements OnInit {

  
  myEditForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    city: ['', [Validators.required]]
  });

  constructor(public dialogRef: MatDialogRef<EditEmpComponent>, public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:Employee) { }

  ngOnInit(): void {
    this.myEditForm.setValue({
      firstName:this.data.firstName,
      lastName:this.data.lastName,
      address:this.data.address,
      birthDate:new Date(this.data.birthDate),
      mobile:this.data.mobile,
      city:this.data.city
    })
  }
 
  
  onNoClick(): void {
    this.dialogRef.close({data:this.myEditForm.value,isUpdate:false});
  }
  submitForm():void{
    this.dialogRef.close({data:this.myEditForm.value,isUpdate:true});
  }

}

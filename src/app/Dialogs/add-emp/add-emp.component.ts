import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddEmpComponent>, public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  myForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    city: ['', [Validators.required]]
  });
  get myFormControl() {
    return this.myForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close({data:this.myForm.value,isAdd:false});
  }
  submitForm():void{
    this.dialogRef.close({data:this.myForm.value,isAdd:true});
  }
}

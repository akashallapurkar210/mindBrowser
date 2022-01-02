import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.scss']
})
export class DeleteEmpComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteEmpComponent>) { }

  ngOnInit(): void {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close({data:true});
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close({data:false});
  }
}

import { Component, OnInit } from '@angular/core';
import { GetEmpDataService } from '../Services/get-emp-data.service';
import { AddEmpComponent } from '../Dialogs/add-emp/add-emp.component';
import { EditEmpComponent } from '../Dialogs/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from '../Dialogs/delete-emp/delete-emp.component';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource : Employee[];
  
  displayedColumns: string[] = ['id','firstName', 'lastName', 'address', 'birthDate','mobile','city','actions'];
  constructor(private getEmpService: GetEmpDataService, public dialog: MatDialog) { }

  ngOnInit(){
    this.loadData();
  }
  loadData(){
    this.getEmpService.getEmployeeDate().subscribe(res =>{
      this.dataSource = res;
      window.sessionStorage.setItem('empDatas',JSON.stringify(this.dataSource));
    });
   
  }
  openDialog(): void {
    const dialogAddRef = this.dialog.open(AddEmpComponent, {
      width: '500px'
    });

    dialogAddRef.afterClosed().subscribe(result => {
      this.addEmployee(result);
    });
  }
  startEdit(id,fnam,lname,add,bdate,mNum,city){
    const dialogEditRef = this.dialog.open(EditEmpComponent, {
      width: '500px',
      data:{firstName:fnam,lastName:lname,address:add,birthDate:bdate,mobile:mNum,city:city}
    });

    dialogEditRef.afterClosed().subscribe((result) => {
     this.updateEmp(id,result);
    });
  }

  deleteItem(id){
    const dialogDelRef = this.dialog.open(DeleteEmpComponent,{
      width:'350px'
    });
    dialogDelRef.afterClosed().subscribe(result => {
      if(result.data){
        this.deleteEmp(id);
      }
    });
  }

  addEmployee(res){
    if(res.isAdd){
      this.getEmpService.addEmployee(res.data).subscribe(data =>{
        this.loadData();
      })
    }
    
  }
  updateEmp(id,res){
    if(res.isUpdate){
      this.getEmpService.updateEmployee(id,res.data).subscribe(data =>{
        this.loadData();
      })
    }
   
  }


  deleteEmp(id){
    this.getEmpService.deleteEmployee(id).subscribe(data =>{
      this.loadData();
    })
  }

}

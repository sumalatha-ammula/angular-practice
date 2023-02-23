import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { EmployeeModal } from '../employeedashbord.modal';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  implements OnInit{
  formValue:FormGroup;
  employeeModalObj:EmployeeModal=new EmployeeModal();
  employeeData:any;
  constructor( private formbuilder:FormBuilder,private employee: EmployeeService ){}
    
  ngOnInit():void{
    this.formValue=this.formbuilder.group({
      firstname:[''],
      LastName:[''],
      email:[''],
      MobileNo:[''],
      salary:['']

    })
  this.getAllEmployee();
  }
    postEmployeeDetails(){
      this.employeeModalObj.firstname=this.formValue.value.firstname;
      this.employeeModalObj.lastName=this.formValue.value.LastName;
      this.employeeModalObj.email=this.formValue.value.email;
      this.employeeModalObj.Mobile=this.formValue.value.MobileNo;
      this.employeeModalObj.salary=this.formValue.value.salary;



      this.employee.PostEmployee(this.employeeModalObj)
      .subscribe(res=>{
        console.log(res);
        alert('employee added sucessfully')
        let ref=document.getElementById('cancel')
        ref?.click()
        this.formValue.reset()
        this.getAllEmployee();

      },
      err=>{
        alert('something went wrong')
      }
      )
      
      }
      
      getAllEmployee(){
        this.employee.getEmployee(this.employeeModalObj)
        .subscribe(res=>{
this.employeeData=res;
        })
      }
      deleteemployee(i:any){
        this.employee.deleteEmployee(i.id)
        .subscribe(res=>{
alert("emloyee deleted")
this.getAllEmployee();
        })
      }
     onEdit(i:any){
      console.log("form val",this.formValue.controls)
      this.formValue.controls['firstname'].setValue(i.firstname);
      this.formValue.controls['lastName'].setValue(i.lastName);
      this.formValue.controls['email'].setValue(i.email);
      this.formValue.controls['Mobile'].setValue(i.Mobile);
      this.formValue.controls['salary'].setValue(i.salary);
     }

    }



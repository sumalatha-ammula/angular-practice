import { Component } from '@angular/core';

@Component({
  selector: 'app-teplate',
  templateUrl: './teplate.component.html',
  styleUrls: ['./teplate.component.css']
})
export class TeplateComponent {
   submit(form:any){
    
    console.log(form.value)
     form.setValue({
      'uname':"john",
'pwd':"12345;"

    })
    console.log(form.value)

  } 

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId=0
  todoList=[
    {
      id:1,'task':'task1'
    },
    {
      id:2,'task':'task2'
    }
    
    
  ]
    

  constructor() {  }
  addTodo(taskName:any){
    this.todoList.push({"id":this.taskId++,'task':taskName})

  }
  deleteTodo(index:any){
    this.todoList.slice(index,1)
  }
  

}


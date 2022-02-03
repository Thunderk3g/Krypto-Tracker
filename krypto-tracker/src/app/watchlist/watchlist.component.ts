import { Component } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent  {
  inputTodo:string='';  
  title='todo app';  
  todos: any[] =[];  
  
  constructor() { }  
  
  ngOnInit(): void {  
    this.todos = [  
      {  
        content:'first todo',  
        completed:false  
      },  
      {  
        content:'second todo',  
        completed:true  
      }  
    ]  
  }  
toggleDone(id:number){  
  this.todos.map((v,i) =>{  
    if(i==id) v.completed = !v.completed;  
    return v;  
  })  
}  
deleteTodo(id:number){  
  this.todos = this.todos.filter((v , i) => i !==id);  
  
  
}  
AddTodo(){  
  this.todos.push({  
    content:this.inputTodo,  
    completed:false  
  });  
  this.inputTodo="";  
}  
}

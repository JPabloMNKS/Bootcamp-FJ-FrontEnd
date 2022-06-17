import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  toDoList: string[] = ['Finish Challenge'];

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(newToDo: string){
    if(newToDo.length > 0){
      this.toDoList.unshift(newToDo);
    }
  }

  removeToDo(index: number) {
    this.toDoList.splice(index, 1);
  }


}

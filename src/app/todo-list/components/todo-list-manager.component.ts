import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../models/todo-items.model';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './todo-list-manager.component.html',
  styleUrls: ['./todo-list-manager.component.scss']
})
export class TodoListManagerComponent implements OnInit {
  public todoList : Array<TodoItems> = new Array<TodoItems>();
  constructor() { }

  ngOnInit() {
  }

}

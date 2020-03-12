import { Component, OnInit, Input } from '@angular/core';
import { TodoItems } from '../../models/todo-items.model';

@Component({
  selector: 'todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {
  @Input() todoArray: Array<TodoItems> = new Array<TodoItems>();

  constructor() {
  

  }

  removeFromList(item: TodoItems) {
    const index: number = this.todoArray.indexOf(item);
    if (index !== -1) {
      this.todoArray.splice(index, 1);
    }
    else{
      return false;
    }
  }

}

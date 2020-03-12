import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItems } from '../../models/todo-items.model';

@Component({
  selector: 'add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.scss']
})
export class AddToListComponent implements OnInit {
  @Input() todoList: Array<TodoItems>;
  @Output() todoListChange: EventEmitter<Array<TodoItems>> = new EventEmitter<Array<TodoItems>>();
  itemOfList: string
  constructor() { 
      this.todoList = new Array<TodoItems>();
}

  ngOnInit() {
  }

  addToList(item: string) {
    if (!item) return false;
    let itemToAdd: TodoItems = new TodoItems();
    itemToAdd.checked = false; // set defult value
    itemToAdd.text = item;
    this.todoList.push(itemToAdd);
    this.todoListChange.emit(this.todoList);
    this.removeInputText();
  }
  removeInputText() {
    if (this.itemOfList) {
      this.itemOfList = "";
    }
  }

}

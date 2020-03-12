import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsComponent } from './todo-items.component';
import { TodoItems } from '../../models/todo-items.model';

describe('TodoItemsComponent', () => {
  let component: TodoItemsComponent;

  beforeEach(() => {
    component = new TodoItemsComponent();

  });

  it('should delete item from List if item exist', () => {
    let testValue: TodoItems = new TodoItems();
    testValue.text = "test";
    testValue.checked = false;

    expect(component.todoArray.length).toEqual(0);
  });
  it('should delete item from List if item Not exist', () => {
    let testValue: TodoItems = new TodoItems();
    testValue.text = "test";
    testValue.checked = false;

    const result = component.removeFromList(testValue);

    expect(result).toBe(false);

  });
});

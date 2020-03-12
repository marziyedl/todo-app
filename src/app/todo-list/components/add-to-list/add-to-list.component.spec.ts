import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListComponent } from './add-to-list.component';

describe('AddToListComponent', () => {
  let component: AddToListComponent;
  beforeEach(() => {
    component = new AddToListComponent();
  })

  it('should not add item to list if input has not value ', () => {
    const result = component.addToList('');

    expect(result).toBe(false);
  });
  it('should  add item to list if input has value ', () => {
    component.addToList('test');

    expect(component.todoList.length).toEqual(1);
  });
  it('should  raise todoListChange when item added to list ', () => {
    let totalList = null;
    component.todoListChange.subscribe(tl => {
      totalList = tl;
    });
    component.addToList("test");
    expect(totalList).not.toBeNull();
  });
});

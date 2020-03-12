import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToListComponent } from './todo-list/components/add-to-list/add-to-list.component';
import { HeaderComponent } from './header/header.component';
import { TodoListManagerComponent } from './todo-list/components/todo-list-manager.component';
import { TodoItemsComponent } from './todo-list/components/todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddToListComponent,
    TodoListManagerComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

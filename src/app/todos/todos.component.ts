import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  imports: [CommonModule, TodoCreatorComponent, TodoListComponent],
})
export class TodosComponent {}

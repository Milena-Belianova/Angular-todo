import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Task } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { selectTodosData } from 'src/app/redux/selectors/todos.selectors';

@UntilDestroy()
@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule, TodoItemComponent],
})
export class TodoListComponent {
  todos: Task[] = [];

  constructor(private store: Store) {
    this.store
      .select(selectTodosData)
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.todos = value;
      });
  }
}

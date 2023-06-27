import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Filter, Task } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { selectFilteredTasks } from 'src/app/redux/selectors/todos.selectors';
import { FilterActions } from 'src/app/redux/actions/filter.actions';

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
      .select(selectFilteredTasks)
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.todos = value;
      });
  }

  handleFilterAllTasks() {
    this.store.dispatch(FilterActions.setFilter({ filterValue: Filter.All }));
  }

  handleFilterTodo() {
    this.store.dispatch(FilterActions.setFilter({ filterValue: Filter.Todo }));
  }

  handleFilterCompleted() {
    this.store.dispatch(
      FilterActions.setFilter({ filterValue: Filter.Completed })
    );
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { TodosActions } from 'src/app/redux/actions/todos.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() task!: Task;

  constructor(private store: Store) {}

  onTaskDelete() {
    this.store.dispatch(TodosActions.removeTask({ id: this.task.id }));
  }

  onCheckboxChange() {
    this.store.dispatch(TodosActions.setTaskDone({ id: this.task.id }));
  }
}

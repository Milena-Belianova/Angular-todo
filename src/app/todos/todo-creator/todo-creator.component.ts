import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodosActions } from 'src/app/redux/actions/todos.actions';

@Component({
  selector: 'app-todo-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss'],
})
export class TodoCreatorComponent {
  taskText = '';

  id = 0;

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(
      TodosActions.addTask({ id: this.id++, body: this.taskText, done: false })
    );
    this.taskText = '';
  }
}

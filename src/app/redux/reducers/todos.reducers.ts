import { createReducer, on } from '@ngrx/store';
import { TodosActions } from '../actions/todos.actions';
import { Task } from '../state.models';

export const initialState: Task[] = [];

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.addTask, (state, task): Task[] => [...state, task]),
  on(TodosActions.removeTask, (state, { id }): Task[] =>
    state.filter((t) => t.id !== id)
  ),
  on(TodosActions.setTaskDone, (state, { id }): Task[] => {
    return state.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
  }),
  on(TodosActions.editTask, (state, task): Task[] => {
    return state.map((item) =>
      item.id === task.id ? { ...item, body: task.body } : item
    );
  })
);

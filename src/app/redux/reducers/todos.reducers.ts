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
    let editItem = state.find((t) => t.id === id);
    if (editItem) {
      editItem = {
        ...editItem,
        done: !editItem.done,
      };
      return [...state.filter((t) => t.id !== id), editItem].sort(
        (a, b) => a.id - b.id
      );
    }
    return state;
  }),
  on(TodosActions.editTask, (state, task): Task[] => {
    let editItem = state.find((t) => t.id === task.id);
    if (editItem) {
      editItem = {
        ...editItem,
        body: task.body,
      };
      return [...state.filter((t) => t.id !== task.id), editItem].sort(
        (a, b) => a.id - b.id
      );
    }
    return state;
  })
);

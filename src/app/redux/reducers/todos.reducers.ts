import { createReducer, on } from '@ngrx/store';
import { TodosActions } from '../actions/todos.actions';
import { Task } from '../state.models';

const getExistingTodos = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};

export const initialState: Task[] = getExistingTodos();

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

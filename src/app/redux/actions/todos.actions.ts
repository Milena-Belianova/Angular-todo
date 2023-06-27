import { createActionGroup, props } from '@ngrx/store';
import { Task } from '../state.models';

export const TodosActions = createActionGroup({
  source: 'Todos data',
  events: {
    'Add task': props<Task>(),
    'Remove task': props<{ id: number }>(),
    'Set task done': props<{ id: number }>(),
    'Edit task': props<Task>(),
  },
});

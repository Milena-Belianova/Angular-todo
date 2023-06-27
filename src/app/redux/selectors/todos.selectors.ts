import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filter, Task } from '../state.models';
import { selectFilter } from './filter.selectors';

const selectTodosData = createFeatureSelector<Task[]>('todos');

export const selectFilteredTasks = createSelector(
  selectTodosData,
  selectFilter,
  (state, filter) => {
    if (filter === Filter.Todo) {
      return state.filter((t) => t.done === false);
    }
    if (filter === Filter.Completed) {
      return state.filter((t) => t.done === true);
    }
    return state;
  }
);

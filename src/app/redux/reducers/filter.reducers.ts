import { createReducer, on } from '@ngrx/store';
import { Filter } from '../state.models';
import { FilterActions } from '../actions/filter.actions';

export const initialState = Filter.All;

export const filterReducer = createReducer(
  initialState,
  on(FilterActions.setFilter, (state, { filterValue }) => filterValue)
);

import { createActionGroup, props } from '@ngrx/store';
import { Filter } from '../state.models';

export const FilterActions = createActionGroup({
  source: 'Filter data',
  events: {
    'Set filter': props<{ filterValue: Filter }>(),
  },
});

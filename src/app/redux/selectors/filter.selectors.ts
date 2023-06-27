import { createFeatureSelector } from '@ngrx/store';
import { Filter } from '../state.models';

export const selectFilter = createFeatureSelector<Filter>('filter');

import { createFeatureSelector } from '@ngrx/store';
import { Task } from '../state.models';

export const selectTodosData = createFeatureSelector<Task[]>('todos');

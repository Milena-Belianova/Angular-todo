export interface State {
  todos: Task[];
  filter: Filter;
}

export interface Task {
  id: number;
  body: string;
  done: boolean;
}

export enum Filter {
  All = 'all',
  Todo = 'todo',
  Completed = 'completed',
}

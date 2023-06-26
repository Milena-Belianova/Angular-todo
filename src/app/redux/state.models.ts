export interface State {
  todos: Task[];
}

export interface Task {
  id: number;
  body: string;
  done: boolean;
}

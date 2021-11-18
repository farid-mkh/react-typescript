export interface TodoStateModel {
  todos: TodoModel[]
}

export interface TodoModel {
  id: number,
  text: string
}

export interface AddInterface {
  text: string
}
export interface DeleteInterface {
  id: number
}
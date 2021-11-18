import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TodoStateModel, AddInterface, DeleteInterface } from './../../models/todo';

const initialState: TodoStateModel = {
  todos: [{ id: 1, text: 'Finish your tasks' }]
}

export const todoStore = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddInterface>) => {
      const payload = action.payload.text
      state.todos.push({ id: Math.random() * 100, text: payload })
    },
    deleteTodo: (state, action: PayloadAction<DeleteInterface>) => {
      console.log(action.payload);
      state.todos = state.todos.filter(i => i.id !== action.payload.id)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoStore.actions

export const todosStore = (state: RootState) => state.todos

export default todoStore.reducer
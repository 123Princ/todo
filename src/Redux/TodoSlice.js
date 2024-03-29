import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
  todoList: [],
  error: null,
  isLoading: false
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      toast.success('Todo successful!');
    },
    removeTodo: (state, action) => {
      const todoList = state.todoList?.filter(todo => todo.id !== action.payload);
      state?.todoList = null
      toast.success('user Delect successful!');
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { addTodo, removeTodo, setLoading, setError } = todoSlice.actions;

export const selectTodoList = state => state.todo.todoList;
export const selectLoading = state => state.todo.isLoading;
export const selectError = state => state.todo.error;

export const { reducer: todoReducer, actions: todoActions } = todoSlice;


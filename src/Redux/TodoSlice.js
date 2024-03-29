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
      toast.success('Todo added successfully!');
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id);
      toast.success('Todo deleted successfully!');
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.todoList.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state.todoList[index] = updatedTodo;
        toast.success('Todo updated successfully!');
      } else {
        toast.error('Todo not found!');
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { addTodo, removeTodo, editTodo, setLoading, setError } = todoSlice.actions;

export const selectTodoList = state => state.todo.todoList;
export const selectLoading = state => state.todo.isLoading;
export const selectError = state => state.todo.error;

export const { reducer: todoReducer, actions: todoActions } = todoSlice;

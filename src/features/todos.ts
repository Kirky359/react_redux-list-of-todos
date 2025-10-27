/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';
import { ErrorType } from '../types/Error';

export interface TodosState {
  items: Todo[];
  isLoading: boolean;
  error: ErrorType;
}

const initialState: TodosState = {
  items: [],
  isLoading: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    set: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, set: setTodos, setError } = todosSlice.actions;

export default todosSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";
import getStoredState from "redux-persist/es/getStoredState";
import { v4 as uuidv4 } from "uuid";

const initialTodos = [
  {
    id: uuidv4(),
    title: "ZZZ",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodos,
  },
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action) => {
      state.todos = [
        ...state.todos.filter((item) => item.id !== action.payload),
      ];
    },
    toggleTodo: (state, action) => {
      let mapped = state.todos.map((x) => {
        return x.id == action.payload ? { ...x, completed: !x.completed } : x;
      });
      state.todos = mapped;
    },
  },
});

export const { createTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
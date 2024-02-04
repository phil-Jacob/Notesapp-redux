import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    tasks : taskReducer,
  },
});

export default store;

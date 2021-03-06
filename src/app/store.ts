import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import savingsPlanReducer from '../features/savingsPlan/savingsPlanSlice';

export const store = configureStore({
  reducer: {
    savingsPlan: savingsPlanReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

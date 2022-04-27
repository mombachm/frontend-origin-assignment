import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface SavingsPlanState {
  amount: number;
  reachDate: Date;
}

export const initialState: SavingsPlanState = {
  amount: 0,
  reachDate: new Date(),
};

const savingsPlanSlice = createSlice({
  name: 'savingsPlan',
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
    incrementReachDate: (state) => {
      const newDate = new Date(state.reachDate);
      newDate.setMonth(newDate.getMonth() + 1);
      state.reachDate = newDate;
    },
    decrementReachDate: (state) => {
      const newDate = new Date(state.reachDate);
      newDate.setMonth(newDate.getMonth() - 1);
      state.reachDate = newDate;
    },
  },
});

export const { updateAmount, incrementReachDate, decrementReachDate } =
  savingsPlanSlice.actions;

export const selectAmount = (state: RootState): number =>
  state.savingsPlan.amount;
export const selectReachDate = (state: RootState): Date =>
  state.savingsPlan.reachDate;

export default savingsPlanSlice.reducer;

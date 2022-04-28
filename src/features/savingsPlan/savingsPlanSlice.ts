import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getNextMonthDate, isNotFutureDate } from '../../utils/dateUtils';

interface SavingsPlanState {
  amount: number;
  reachDate: string;
}

export const initialState: SavingsPlanState = {
  amount: 0,
  reachDate: getNextMonthDate(new Date()).toUTCString(),
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
      state.reachDate = newDate.toUTCString();
    },
    decrementReachDate: (state) => {
      const newDate = new Date(state.reachDate);
      newDate.setMonth(newDate.getMonth() - 1);
      if (isNotFutureDate(newDate)) return state;
      state.reachDate = newDate.toUTCString();
    },
  },
});

export const { updateAmount, incrementReachDate, decrementReachDate } =
  savingsPlanSlice.actions;

export const selectAmount = (state: RootState): number =>
  state.savingsPlan.amount;
export const selectReachDate = (state: RootState): Date =>
  new Date(state.savingsPlan.reachDate);

export default savingsPlanSlice.reducer;

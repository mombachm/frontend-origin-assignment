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
  },
});

export const { updateAmount } = savingsPlanSlice.actions;

export const selectAmount = (state: RootState): number =>
  state.savingsPlan.amount;

export default savingsPlanSlice.reducer;

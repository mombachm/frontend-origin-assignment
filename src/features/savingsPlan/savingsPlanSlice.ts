import { createSlice } from '@reduxjs/toolkit';

interface SavingsPlanState {
  amount: number;
  reachDate: Date;
}

const initialState: SavingsPlanState = {
  amount: 0,
  reachDate: new Date(),
};

const savingsPlanSlice = createSlice({
  name: 'savingsPlan',
  initialState,
  reducers: {},
});

export default savingsPlanSlice.reducer;

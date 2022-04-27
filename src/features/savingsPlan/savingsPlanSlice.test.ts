import { AnyAction } from '@reduxjs/toolkit';
import savingsPlanReducer, {
  initialState,
  selectAmount,
  updateAmount,
} from './savingsPlanSlice';

describe('savingsPlanSlice', () => {
  describe('reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
      const nextState = initialState;
      const result = savingsPlanReducer(undefined, {} as AnyAction);
      expect(result).toEqual(nextState);
    });
    it('should properly update the amount', () => {
      const amount = 4500.45;
      const nextState = savingsPlanReducer(initialState, updateAmount(amount));
      const rootState = { savingsPlan: nextState };
      expect(selectAmount(rootState)).toEqual(amount);
    });
  });
});

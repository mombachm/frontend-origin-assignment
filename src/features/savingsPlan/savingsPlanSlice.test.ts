import { AnyAction } from '@reduxjs/toolkit';
import savingsPlanReducer, {
  decrementReachDate,
  incrementReachDate,
  initialState,
  selectAmount,
  selectReachDate,
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
    it('should properly increment the reach date by month', () => {
      const nextDate = new Date(initialState.reachDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      const nextState = savingsPlanReducer(initialState, incrementReachDate());
      const rootState = { savingsPlan: nextState };
      expect(selectReachDate(rootState).getMonth()).toEqual(
        nextDate.getMonth()
      );
      expect(selectReachDate(rootState).getFullYear()).toEqual(
        nextDate.getFullYear()
      );
    });
    it('should not decrement the reach date by month when the date is not a valid future date', () => {
      const nextDate = new Date(initialState.reachDate);
      const nextState = savingsPlanReducer(initialState, decrementReachDate());
      const rootState = { savingsPlan: nextState };
      expect(selectReachDate(rootState).getMonth()).toEqual(
        nextDate.getMonth()
      );
      expect(selectReachDate(rootState).getFullYear()).toEqual(
        nextDate.getFullYear()
      );
    });
    it('should properly decrement the reach date by month when the date is a valid future date', () => {
      const initialReachDate = new Date();
      initialReachDate.setMonth(initialReachDate.getMonth() + 3);
      const state = {
        amount: 0,
        reachDate: initialReachDate.toUTCString(),
      };
      const nextDate = new Date(initialReachDate);
      nextDate.setMonth(nextDate.getMonth() - 1);
      const nextState = savingsPlanReducer(state, decrementReachDate());
      const rootState = { savingsPlan: nextState };
      expect(selectReachDate(rootState).getMonth()).toEqual(
        nextDate.getMonth()
      );
      expect(selectReachDate(rootState).getFullYear()).toEqual(
        nextDate.getFullYear()
      );
    });
  });
});

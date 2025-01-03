import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialCounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<CounterState>) => {
      state.value += action.payload.value;
    },
  },
  selectors: {},
});

export const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export const counterSelectors = counterSlice.selectors;
export default counterReducer;

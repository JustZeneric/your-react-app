// src/actions.js
// Define action types
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const ADD_INTEREST = 'ADD_INTEREST';
export const APPLY_CHARGES = 'APPLY_CHARGES';

// Action creators
export const deposit = (amount) => ({
  type: DEPOSIT,
  payload: amount,
});

export const withdraw = (amount) => ({
  type: WITHDRAW,
  payload: amount,
});

export const addInterest = () => ({
  type: ADD_INTEREST,
});

export const applyCharges = () => ({
  type: APPLY_CHARGES,
});

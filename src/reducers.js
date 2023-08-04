// src/reducers.js
import { DEPOSIT, WITHDRAW, ADD_INTEREST, APPLY_CHARGES } from './actions';

// Define the initial state for the reducer
const initialState = {
  balance: 0,
};

// Reducer function
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      // Handle the DEPOSIT action
      // Increment the balance with the deposited amount
      return { ...state, balance: state.balance + action.payload };
    case WITHDRAW:
      // Handle the WITHDRAW action
      // Decrease the balance with the withdrawn amount
      return { ...state, balance: state.balance - action.payload };
    case ADD_INTEREST:
      // Handle the ADD_INTEREST action
      // Increase the balance by 5% (add interest)
      return { ...state, balance: state.balance * 1.05 };
    case APPLY_CHARGES:
      // Handle the APPLY_CHARGES action
      // Decrease the balance by 15% (apply charges)
      return { ...state, balance: state.balance * 0.85 };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
};

export default reducers;

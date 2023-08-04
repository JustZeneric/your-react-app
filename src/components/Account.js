// src/components/Account.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw, addInterest, applyCharges } from '../actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Account = () => {
  const [amount, setAmount] = useState(0);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  // Event handler for the Deposit button
  const handleDeposit = () => {
    dispatch(deposit(amount));
  };

  // Event handler for the Withdraw button
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };

  // Event handler for the Add Interest button
  const handleAddInterest = () => {
    dispatch(addInterest());
  };

  // Event handler for the Apply Charges button
  const handleApplyCharges = () => {
    dispatch(applyCharges());
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      {/* Display the current account balance */}
      <Typography variant="h4">Account Balance: {balance}</Typography>
      {/* Input field to enter the amount for deposit or withdrawal */}
      <TextField
        type="number"
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        variant="outlined"
        size="small"
        style={{ marginTop: '20px' }}
      />
      {/* Buttons to perform various actions */}
      <Button
        variant="contained"
        onClick={handleDeposit}
        style={{ marginTop: '10px', marginRight: '10px' }}
      >
        Deposit
      </Button>
      <Button
        variant="contained"
        onClick={handleWithdraw}
        style={{ marginTop: '10px', marginRight: '10px' }}
      >
        Withdraw
      </Button>
      <Button
        variant="contained"
        onClick={handleAddInterest}
        style={{ marginTop: '10px', marginRight: '10px' }}
      >
        Add Interest
      </Button>
      <Button
        variant="contained"
        onClick={handleApplyCharges}
        style={{ marginTop: '10px' }}
      >
        Apply Charges
      </Button>
    </div>
  );
};

export default Account;

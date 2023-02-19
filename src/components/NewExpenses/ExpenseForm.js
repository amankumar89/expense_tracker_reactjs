import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // multiple approach every key have useState
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // useState combined
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });

  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput form 1
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    // setUserInput form 2
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // });
  };

  const onAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // console.log(event.target.value);
    // setUserInput form 1
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
    // setUserInput form 2
    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: event.target.value };
    // });
  };

  const onDateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // console.log(event.target.value);
    // setUserInput form 1
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
    // setUserInput form 2
    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={onTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={onAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={onDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

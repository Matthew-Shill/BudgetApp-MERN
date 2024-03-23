import React, {useEffect} from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/form";
import ExpenseItem from "../ExpenseItem/expenseItem";
import ExpenseForm from './expenseForm';


function Expenses() {
  const {expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses()
  }, [])

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-expense">Total Expense: <span>${totalExpenses()}</span></h2>
        <div className="expense-content">
            <div className="form-container">
                <ExpenseForm />
            </div>
            <div className="expense-display">
                {Array.isArray(expenses) && expenses.length > 0 ? (
                    expenses.map((expense) => {
                    const { _id, title, amount, date, category, description, type } = expense;
                    console.log(expense);
                    return (
                        <ExpenseItem
                        key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        amount={amount}
                        date={date}
                        type={type}
                        category={category}
                        indicatorColor="var(--color-accent)"
                        deleteItem={deleteExpense}
                        />
                    );
                    })
                ) : (
                    <p>No expenses found.</p>
                )}
                </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fcf6f9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-accent);
        }
    }
    .expense-content {
        display: flex;
        gap: 2rem;
        .expenses {
            flex: 1;
        }
    }
`;

export default Expenses;

import mongoose from 'mongoose'

export const INCOME_CATEGORIES = [
  "Salary",
  "Business",
  "Bonus",
  "Refund",
  "Investment",
];

export const EXPENSE_CATEGORIES = [
  "Food",
  "Travel",
  "Tax",
  "Shopping",
  "Bills",
  "Medical",
  "Miscellaneous"
];

export const ALL_CATEGORIES = {
  Income: INCOME_CATEGORIES, 
  Expense: EXPENSE_CATEGORIES
} as const;

export type AccountHealth = "grow" | "decline" | "neutral"

export type TransactionType = "income" | "expense";

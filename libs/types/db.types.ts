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


export type TransactionType = "income" | "expense";

export interface ITransaction {
  _id?: string;
  id?: string; // for frontend mapping
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string; // ISO
  user?: mongoose.Types.ObjectId | null;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  createdAt?: Date;
}
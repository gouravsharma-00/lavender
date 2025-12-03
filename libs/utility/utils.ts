// lib/utils.ts
import { ITransaction } from "../types/db.types";

export type TimeRange = "month" | "quarter" | "year";

export function getBalance(transactions: ITransaction[]) {
  let income = 0;
  let expense = 0;
  for (const t of transactions) {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  }
  return { income, expense, balance: income - expense };
}

export function filterByRange(
  transactions: ITransaction[] = [],
  range: TimeRange
): ITransaction[] {
  if (!transactions.length) return [];
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-based

  return transactions.filter((t) => {
    const d = new Date(t.date);
    if (range === "year") {
      return d.getFullYear() === currentYear;
    }
    if (range === "month") {
      return (
        d.getFullYear() === currentYear && d.getMonth() === currentMonth
      );
    }
    // quarter = last 3 months including current
    const diffMonths =
      (currentYear - d.getFullYear()) * 12 + (currentMonth - d.getMonth());
    return diffMonths >= 0 && diffMonths < 3;
  });
}

export function getMonthlyIncomeExpense(
  transactions: ITransaction[] = [],
  year: number
) {
  const months = Array.from({ length: 12 }, (_, i) => ({
    monthIndex: i,
    month: new Date(0, i).toLocaleString("default", { month: "short" }),
    income: 0,
    expense: 0,
  }));

  for (const t of transactions) {
    const d = new Date(t.date);
    if (d.getFullYear() !== year) continue;
    const idx = d.getMonth();
    if (t.type === "income") months[idx].income += t.amount;
    else months[idx].expense += t.amount;
  }

  return months;
}

export function getCategorySplit(
  transactions: ITransaction[] = [],
  type: "income" | "expense"
) {
  const map = new Map<string, number>();
  for (const t of transactions) {
    if (t.type !== type) continue;
    map.set(t.category, (map.get(t.category) || 0) + t.amount);
  }
  return Array.from(map.entries()).map(([name, value]) => ({
    name,
    value,
  }));
}

export function formatCurrency(amount: number) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

import { TrendingUp, PieChart, BarChart3 } from "lucide-react";

export const ChartsPreview = () => {
  const expenseBreakdown = [
    { category: "Food & Dining", amount: 12500, percentage: 30, color: "bg-[#10B981]" },
    { category: "Transport", amount: 8300, percentage: 20, color: "bg-[#7C3AED]" },
    { category: "Shopping", amount: 6200, percentage: 15, color: "bg-red-500" },
    { category: "Bills & Utilities", amount: 5800, percentage: 14, color: "bg-slate-600" },
    { category: "Entertainment", amount: 4200, percentage: 10, color: "bg-[#10B981]/60" },
    { category: "Others", amount: 4300, percentage: 11, color: "bg-[#7C3AED]/60" },
  ];

  const monthlyTrend = [
    { month: "Jan", income: 85000, expenses: 45000 },
    { month: "Feb", income: 85000, expenses: 42000 },
    { month: "Mar", income: 88000, expenses: 48000 },
    { month: "Apr", income: 85000, expenses: 44000 },
    { month: "May", income: 90000, expenses: 46000 },
    { month: "Jun", income: 85000, expenses: 42300 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-[#10B981] rounded-full text-sm font-medium mb-4">
            Visual Analytics
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            See Your Money Story at a Glance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beautiful, interactive charts that make understanding your finances effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Expense Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                <PieChart className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Expense Breakdown</h3>
                <p className="text-sm text-slate-500">June 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              {expenseBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-900 font-medium">{item.category}</span>
                    <span className="text-slate-500">
                      ₹{item.amount.toLocaleString()} ({item.percentage}%)
                    </span>
                  </div>

                  <div className="w-full bg-slate-200/50 rounded-full h-3">
                    <div
                      className={`${item.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Total Expenses</span>
                <span className="text-lg font-bold text-red-500">₹41,300</span>
              </div>
            </div>
          </div>

          {/* Cashflow Trend */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Cashflow Trends</h3>
                <p className="text-sm text-slate-500">Last 6 months</p>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-3 mb-6">
              {monthlyTrend.map((data, index) => {
                const maxAmount = 90000;
                const incomeHeight = (data.income / maxAmount) * 100;
                const expenseHeight = (data.expenses / maxAmount) * 100;

                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-48">

                      {/* Income */}
                      <div
                        className="flex-1 bg-[#10B981] rounded-t-lg hover:opacity-80 transition-all cursor-pointer relative group"
                        style={{ height: `${incomeHeight}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded">
                          ₹{(data.income / 1000).toFixed(0)}k
                        </div>
                      </div>

                      {/* Expenses */}
                      <div
                        className="flex-1 bg-red-500/70 rounded-t-lg hover:bg-red-500/60 transition-all cursor-pointer relative group"
                        style={{ height: `${expenseHeight}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded">
                          ₹{(data.expenses / 1000).toFixed(0)}k
                        </div>
                      </div>

                    </div>
                    <span className="text-xs text-slate-500 font-medium">{data.month}</span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10B981] rounded"></div>
                <span className="text-sm text-slate-500">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500/70 rounded"></div>
                <span className="text-sm text-slate-500">Expenses</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span className="text-slate-600">
                Average savings:{" "}
                <span className="font-semibold text-[#10B981]">₹42,800/month</span>
              </span>
            </div>
          </div>
        </div>

        {/* Budget vs Actual */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Budget vs Actual</h3>
              <p className="text-sm text-slate-500">Stay on track with smart alerts</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Groceries", budget: 8000, actual: 7200, status: "good" },
              { category: "Dining Out", budget: 5000, actual: 6500, status: "warning" },
              { category: "Entertainment", budget: 3000, actual: 2800, status: "good" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">{item.category}</h4>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Budget</span>
                    <span className="text-slate-900">{item.budget.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Actual</span>
                    <span className={item.status === "good" ? "text-[#10B981]" : "text-red-500"}>
                      {item.actual.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-full rounded-full transition-all ${item.status === "good" ? "bg-[#10B981]" : "bg-red-500"}`}
                    style={{ width: `${(item.actual / item.budget) * 100}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

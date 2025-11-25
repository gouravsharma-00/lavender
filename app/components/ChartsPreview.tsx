import { TrendingUp, PieChart, BarChart3 } from "lucide-react";

export const ChartsPreview = () => {
  const expenseBreakdown = [
    { category: "Food & Dining", amount: 12500, percentage: 30, color: "bg-accent" },
    { category: "Transport", amount: 8300, percentage: 20, color: "bg-primary" },
    { category: "Shopping", amount: 6200, percentage: 15, color: "bg-destructive" },
    { category: "Bills & Utilities", amount: 5800, percentage: 14, color: "bg-muted-foreground" },
    { category: "Entertainment", amount: 4200, percentage: 10, color: "bg-accent/60" },
    { category: "Others", amount: 4300, percentage: 11, color: "bg-primary/60" },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-light text-accent rounded-full text-sm font-medium mb-4">
            Visual Analytics
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            See Your Money Story at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beautiful, interactive charts that make understanding your finances effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Expense Breakdown Chart */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <PieChart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Expense Breakdown</h3>
                <p className="text-sm text-muted-foreground">June 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              {expenseBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{item.category}</span>
                    <span className="text-muted-foreground">₹{item.amount.toLocaleString()} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className={`${item.color} h-full rounded-full transition-all duration-500 hover:opacity-80`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Total Expenses</span>
                <span className="text-lg font-bold text-destructive">₹41,300</span>
              </div>
            </div>
          </div>

          {/* Cashflow Trend Chart */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Cashflow Trends</h3>
                <p className="text-sm text-muted-foreground">Last 6 months</p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-3 mb-6">
              {monthlyTrend.map((data, index) => {
                const maxAmount = 90000;
                const incomeHeight = (data.income / maxAmount) * 100;
                const expenseHeight = (data.expenses / maxAmount) * 100;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-48">
                      <div 
                        className="flex-1 bg-accent rounded-t-lg hover:bg-accent/80 transition-all cursor-pointer relative group"
                        style={{ height: `${incomeHeight}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                          ₹{(data.income/1000).toFixed(0)}k
                        </div>
                      </div>
                      <div 
                        className="flex-1 bg-destructive/70 rounded-t-lg hover:bg-destructive/60 transition-all cursor-pointer relative group"
                        style={{ height: `${expenseHeight}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                          ₹{(data.expenses/1000).toFixed(0)}k
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{data.month}</span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded"></div>
                <span className="text-sm text-muted-foreground">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive/70 rounded"></div>
                <span className="text-sm text-muted-foreground">Expenses</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Average savings: <span className="font-semibold text-accent">₹42,800/month</span></span>
            </div>
          </div>
        </div>

        {/* Budget vs Actual Preview */}
        <div className="mt-8 bg-gradient-subtle border border-border rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Budget vs Actual</h3>
              <p className="text-sm text-muted-foreground">Stay on track with smart alerts</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Groceries", budget: 8000, actual: 7200, status: "good" },
              { category: "Dining Out", budget: 5000, actual: 6500, status: "warning" },
              { category: "Entertainment", budget: 3000, actual: 2800, status: "good" },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-5 border border-border">
                <h4 className="font-semibold text-foreground mb-3">{item.category}</h4>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="text-foreground">₹{item.budget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Actual</span>
                    <span className={item.status === "good" ? "text-accent" : "text-destructive"}>
                      ₹{item.actual.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${item.status === "good" ? "bg-accent" : "bg-destructive"}`}
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


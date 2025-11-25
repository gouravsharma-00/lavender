import { Sparkles, TrendingUp, AlertCircle, Target } from "lucide-react";

export const AIInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      type: "Spending Pattern",
      message: "Your food expenses increased 22% this month.",
      detail: "Compared to last month, you spent ₹3,200 more on dining out.",
      color: "text-accent"
    },
    {
      icon: Target,
      type: "Savings Opportunity",
      message: "You can save ₹4,500 by canceling unused subscriptions.",
      detail: "We found 3 subscriptions you haven't used in 60+ days: Spotify Premium, Netflix, and Gym membership.",
      color: "text-accent"
    },
    {
      icon: AlertCircle,
      type: "Cashflow Prediction",
      message: "Projected balance by month end: ₹12,300.",
      detail: "Based on your recurring expenses and income patterns, you'll have a healthy buffer.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-light rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent">AI Intelligence</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Real Insights, Not Just Numbers
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Our AI doesn't just track—it analyzes patterns, predicts outcomes, and gives you actionable recommendations.
          </p>
        </div>

        {/* Insights Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-light rounded-xl flex items-center justify-center shrink-0">
                    <Icon className={`w-5 h-5 ${insight.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {insight.type}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                  {insight.message}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Example Conversation */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-foreground">Ask Your AI Financial Analyst</h3>
          </div>
          
          <div className="space-y-4">
            {/* User question */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-5 py-3 max-w-md">
                <p className="text-sm">How much can I save this month?</p>
              </div>
            </div>
            
            {/* AI response */}
            <div className="flex justify-start">
              <div className="bg-secondary rounded-2xl rounded-tl-sm px-5 py-3 max-w-md">
                <p className="text-sm text-foreground mb-2">
                  Based on your spending patterns, you can save <span className="font-semibold text-accent">₹8,200 this month</span> by:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Reducing dining out by 30% (₹3,200)</li>
                  <li>• Canceling unused subscriptions (₹2,500)</li>
                  <li>• Shopping with your existing meal plan (₹2,500)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


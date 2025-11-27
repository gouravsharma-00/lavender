import { Sparkles, TrendingUp, AlertCircle, Target } from "lucide-react";

export const AIInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      type: "Spending Pattern",
      message: "Your food expenses increased 22% this month.",
      detail: "Compared to last month, you spent ₹3,200 more on dining out.",
      color: "text-[#10B981]" // emerald
    },
    {
      icon: Target,
      type: "Savings Opportunity",
      message: "You can save ₹4,500 by canceling unused subscriptions.",
      detail: "We found 3 subscriptions you haven't used in 60+ days: Spotify Premium, Netflix, and Gym membership.",
      color: "text-[#10B981]"
    },
    {
      icon: AlertCircle,
      type: "Cashflow Prediction",
      message: "Projected balance by month end: ₹12,300.",
      detail: "Based on your recurring expenses and income patterns, you'll have a healthy buffer.",
      color: "text-[#7C3AED]" // primary
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D8FD]/60 to-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#10B981]/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-[#10B981]" />
            <span className="text-[#10B981]">AI Intelligence</span>
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Real Insights, Not Just Numbers
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className={`w-5 h-5 ${insight.color}`} />
                  </div>

                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {insight.type}
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">
                  {insight.message}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {insight.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Example Conversation */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#10B981]" />
            <h3 className="text-xl font-bold text-slate-900">Ask Your AI Financial Analyst</h3>
          </div>

          <div className="space-y-4">
            {/* User Prompt */}
            <div className="flex justify-end">
              <div className="bg-[#7C3AED] text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-md">
                <p className="text-sm">How much can I save this month?</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-5 py-3 max-w-md">
                <p className="text-sm text-slate-900 mb-2">
                  Based on your spending patterns, you can save{" "}
                  <span className="font-semibold text-[#10B981]">₹8,200 this month</span> by:
                </p>

                <ul className="text-sm text-slate-500 space-y-1 ml-4">
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

import { AlertCircle, TrendingDown, Clock, BarChart3, CheckCircle, Sparkles } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Lost Money",
      description: "Don't know where your money goes each month"
    },
    {
      icon: TrendingDown,
      title: "Overspending",
      description: "Realize too late that you've overspent"
    },
    {
      icon: Clock,
      title: "Time Consuming",
      description: "Manual tracking is painful and takes forever"
    },
    {
      icon: BarChart3,
      title: "No Visibility",
      description: "No clear picture of your financial health"
    }
  ];

  const solutions = [
    {
      icon: Sparkles,
      title: "AI Auto-Categorization",
      description: "Automatically sorts and understands every transaction"
    },
    {
      icon: CheckCircle,
      title: "Smart Alerts",
      description: "Get notified before you overspend, not after"
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      description: "Clear dashboard showing exactly where you stand"
    },
    {
      icon: TrendingDown,
      title: "Predictive Analysis",
      description: "AI forecasts your cashflow and finds savings"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Managing Money Shouldn't Be This Hard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional finance apps make you do all the work. Lavender's AI does the heavy lifting.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
              Common Frustrations
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider with arrow */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px bg-border flex-1 max-w-xs"></div>
          <div className="mx-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="h-px bg-border flex-1 max-w-xs"></div>
        </div>

        {/* Solutions Section */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-light text-accent rounded-full text-sm font-medium mb-4">
              How Lavender Solves This
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-card border border-accent/20 rounded-xl p-6 hover:shadow-lg hover:border-accent/40 transition-all">
                  <div className="w-12 h-12 bg-emerald-light rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


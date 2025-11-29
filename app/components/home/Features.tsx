import { Sparkles, BarChart3, Bell, Calendar, MessageSquare, Upload } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Smart Categorization",
      description: "AI automatically categorizes every transaction with high accuracy. No more manual tagging.",
      gradient: "from-[#10B981]/20 to-[#10B981]/5" // Emerald accent
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Beautiful visualizations showing spending patterns, trends, and financial health at a glance.",
      gradient: "from-[#7C3AED]/20 to-[#7C3AED]/5" // Lavender primary
    },
    {
      icon: Bell,
      title: "Budget Alerts",
      description: "Get notified before you overspend. Smart alerts keep you on track without being annoying.",
      gradient: "from-red-500/20 to-red-500/5"
    },
    {
      icon: Calendar,
      title: "Monthly Insights",
      description: "Comprehensive monthly reports with actionable recommendations to improve your finances.",
      gradient: "from-[#10B981]/20 to-[#10B981]/5"
    },
    {
      icon: MessageSquare,
      title: "AI Chat Assistant",
      description: "Ask questions about your finances in plain English. Get instant, intelligent answers.",
      gradient: "from-[#7C3AED]/20 to-[#7C3AED]/5"
    },
    {
      icon: Upload,
      title: "Easy Import",
      description: "Import bank statements via CSV or add transactions manually. Quick setup in minutes.",
      gradient: "from-[#10B981]/20 to-[#10B981]/5"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-[#10B981] rounded-full text-sm font-medium mb-4">
            Core Features
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Master Your Money
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built from the ground up with AI to make personal finance simple, intelligent, and stress-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#10B981]/40 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-[#10B981]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">
            And many more features coming soon...
          </p>
          <div className="inline-flex items-center gap-2 text-[#10B981] font-medium">
            <Sparkles className="w-5 h-5" />
            <span>Powered by Advanced AI</span>
          </div>
        </div>

      </div>
    </section>
  );
};

import { Check, Sparkles, Crown } from "lucide-react";
import { Button } from "@components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with smart finance tracking",
      features: [
        "Up to 100 transactions/month",
        "Manual transaction entry",
        "Basic categorization",
        "Spending overview",
        "Email support",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Unlock AI insights and take control of your finances",
      features: [
        "Unlimited transactions",
        "AI-powered categorization",
        "Advanced analytics & charts",
        "Cashflow predictions",
        "Budget alerts & recommendations",
        "AI chat assistant",
        "CSV import from banks",
        "Priority support",
      ],
      cta: "Start Pro Trial",
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Founding Member",
      price: "₹199",
      period: "per month",
      description: "Lock in special pricing forever as an early supporter",
      features: [
        "Everything in Pro",
        "Lifetime discount (₹100/mo off)",
        "Early access to new features",
        "Founding member badge",
        "Direct feedback channel",
        "Priority feature requests",
      ],
      cta: "Become a Founder",
      popular: false,
      badge: "Limited Offer",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-[#10B981] rounded-full text-sm font-medium mb-4">
            Simple Pricing
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start free, upgrade when you need AI superpowers. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "border-[#10B981] shadow-xl scale-105 lg:scale-110"
                  : plan.highlight
                  ? "border-[#7C3AED] shadow-lg"
                  : "border-slate-200 hover:shadow-lg"
              }`}
            >

              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                    plan.popular
                      ? "bg-[#10B981] text-white"
                      : "bg-[#7C3AED] text-white"
                  }`}
                >
                  {plan.popular && <Sparkles className="w-3 h-3" />}
                  {plan.highlight && <Crown className="w-3 h-3" />}
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">/ {plan.period}</span>
                </div>

                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.popular
                    ? "bg-[#10B981] hover:bg-[#0CA76E] text-white"
                    : plan.highlight
                    ? "bg-[#7C3AED] hover:bg-[#6A28DB] text-white"
                    : "border-slate-300 text-slate-900 hover:bg-slate-200"
                }`}
                variant={plan.popular || plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-900">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">
            All plans include bank-level security and data privacy protection
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981]" />
              No credit card for free plan
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981]" />
              14-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981]" />
              Cancel anytime
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

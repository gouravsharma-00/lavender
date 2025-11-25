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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-light text-accent rounded-full text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, upgrade when you need AI superpowers. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? "border-accent shadow-xl scale-105 lg:scale-110" 
                  : plan.highlight
                  ? "border-primary shadow-lg"
                  : "border-border hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {(plan.badge) && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${
                  plan.popular 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-primary text-primary-foreground"
                }`}>
                  {plan.popular && <Sparkles className="w-3 h-3 inline mr-1" />}
                  {plan.highlight && <Crown className="w-3 h-3 inline mr-1" />}
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <Button 
                className={`w-full mb-6 ${
                  plan.popular 
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                    : plan.highlight
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : ""
                }`}
                variant={plan.popular || plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            All plans include bank-level security and data privacy protection
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>No credit card for free plan</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>14-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


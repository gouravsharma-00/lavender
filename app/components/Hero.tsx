import { Button } from "@components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-light rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Powered Financial Intelligence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Personal AI
              <span className="block text-accent">Financial Analyst</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Track, analyze, and optimize your money with intelligent insights. 
              Let AI handle the complexity while you focus on what matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg group">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                See How It Works
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Free tier available</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard preview placeholder */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl shadow-2xl border border-border p-8">
              <div className="space-y-4">
                {/* Mock dashboard elements */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Balance</p>
                    <p className="text-3xl font-bold text-foreground">₹1,24,500</p>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary p-4 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Income</p>
                    <p className="text-xl font-semibold text-accent">+₹85,000</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Expenses</p>
                    <p className="text-xl font-semibold text-destructive">-₹42,300</p>
                  </div>
                </div>
                
                {/* Mock chart */}
                <div className="h-40 bg-gradient-subtle rounded-xl flex items-end justify-around p-4 gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div key={i} className="flex-1 bg-accent/20 rounded-t-lg transition-all hover:bg-accent/40" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                
                {/* AI insight badge */}
                <div className="bg-emerald-light border border-accent/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">AI Insight</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your food expenses increased 22% this month. Consider meal planning to save ₹3,200.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};


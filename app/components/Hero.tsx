import { Button } from "@components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#E9D8FD]/60 to-white py-20 px-4 sm:px-6 lg:px-8">

      {/* Decorative Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10B981]/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm font-medium text-[#10B981]">
                AI-Powered Financial Intelligence
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Your Personal AI
              <span className="block text-[#10B981]">Financial Analyst</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              Track, analyze, and optimize your money with intelligent insights.
              Let AI handle the complexity while you focus on what matters.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/auth?action=register">
                <Button
                  size="lg"
                  className="bg-[#10B981] hover:bg-[#0CA76E] text-white shadow-lg group"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  className="border-slate-300 text-slate-900 hover:bg-slate-200"
                  variant="outline"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Badges */}
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                <span>No credit card required</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                <span>Free tier available</span>
              </div>
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="relative">
            <div className="relative z-10 bg-white border border-slate-200 rounded-2xl shadow-2xl p-8">
              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Total Balance</p>
                    <p className="text-3xl font-bold text-slate-900">₹1,24,500</p>
                  </div>

                  <div className="w-12 h-12 bg-[#7C3AED]/15 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Income</p>
                    <p className="text-xl font-semibold text-[#10B981]">+₹85,000</p>
                  </div>

                  <div className="bg-slate-100 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Expenses</p>
                    <p className="text-xl font-semibold text-red-500">-₹42,300</p>
                  </div>
                </div>

                <div className="h-40 bg-slate-100 rounded-xl p-4 flex items-end justify-around gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-[#10B981]/40 hover:bg-[#10B981]/60 transition-all"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>

                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">AI Insight</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Your food expenses increased 22% this month. Consider meal planning to save ₹3,200.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute -inset-4 bg-[#10B981]/20 rounded-3xl blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

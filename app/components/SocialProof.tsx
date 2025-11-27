import { Star, Users, TrendingUp } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D8FD]/50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10B981]/10 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-[#10B981]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">2,500+</div>
            <div className="text-slate-600">Early Access Signups</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7C3AED]/10 rounded-2xl mb-4">
              <TrendingUp className="w-8 h-8 text-[#7C3AED]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">₹12.5L+</div>
            <div className="text-slate-600">Money Tracked So Far</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10B981]/10 rounded-2xl mb-4">
              <Star className="w-8 h-8 text-[#10B981]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
            <div className="text-slate-600">Beta User Rating</div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Loved by Early Users
          </h2>
          <p className="text-slate-600 mb-8">
            Join thousands who are taking control of their finances with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Finally, an app that understands my spending without me doing all the work. The AI insights are incredibly accurate.",
              author: "Priya S.",
              role: "Software Engineer",
            },
            {
              quote: "I saved ₹15,000 in my first month just by following Lavender's recommendations. This is a game-changer!",
              author: "Rahul M.",
              role: "Marketing Manager",
            },
            {
              quote: "The cashflow predictions helped me avoid overdrafts twice. It's like having a financial advisor in my pocket.",
              author: "Anita K.",
              role: "Freelance Designer",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#10B981] fill-[#10B981]" />
                ))}
              </div>

              <p className="text-slate-900 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-600 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            <span>Bank-level encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            <span>Your data stays private</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            <span>No data selling</span>
          </div>
        </div>

      </div>
    </section>
  );
};

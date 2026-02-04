
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-slate-600">Simple steps to find your perfect internship opportunity.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-blue-200 -z-10"></div>
          
          {[
            { n: 1, t: 'Create Profile', d: 'Tell us about your education, skills, and interests using voice or text.' },
            { n: 2, t: 'AI Matching', d: 'Our system analyzes your profile and matches with best internships.' },
            { n: 3, t: 'Get Recommended', d: 'Receive personalized suggestions with clear future career paths.' }
          ].map(s => (
            <div key={s.n} className="flex-1 text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl border-4 border-blue-100">
                {s.n}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{s.t}</h3>
              <p className="text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

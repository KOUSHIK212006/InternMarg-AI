
import React from 'react';

const FEATURE_DATA = [
  { icon: 'fa-robot', title: 'Smart Matching', desc: 'Our AI algorithm analyzes your skills, interests, and career goals to match you with the most suitable opportunities.' },
  { icon: 'fa-language', title: 'Regional Support', desc: 'Access the platform in your preferred regional language for a seamless and personalized experience.' },
  { icon: 'fa-chart-line', title: 'Skill Assessment', desc: 'Comprehensive skill evaluation to identify your strengths and areas for development.' },
  { icon: 'fa-road', title: 'Path Guidance', desc: 'Get personalized recommendations for your career trajectory based on your internship experiences.' },
  { icon: 'fa-user-tie', title: 'Industry Connect', desc: 'Connect directly with top companies and government organizations offering internships.' },
  { icon: 'fa-mobile-alt', title: 'Mobile Friendly', desc: 'Access internship opportunities on-the-go with our mobile-responsive platform.' }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">AI-Powered Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Discover how our advanced technology helps students find the perfect internship opportunities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_DATA.map((f, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg">
                <i className={`fas ${f.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

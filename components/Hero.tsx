
import React from 'react';

interface HeroProps {
  onFindClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onFindClick }) => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400C150,500 300,600 600,600S900,500 1200,400S900,200 600,200S30,300 0,400Z" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          InternMarg: AI Internship Recommendation <br /> for Every Student
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">
          Empowering India's youth with personalized internship opportunities through AI-driven recommendations, skill assessment, and career guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button 
            onClick={onFindClick}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-blue-50 transition transform hover:-translate-y-1"
          >
            Find My Internship <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <button 
            onClick={scrollToFeatures}
            className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
          >
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-1">10K+</div>
            <div className="text-blue-200 uppercase tracking-wide text-sm font-semibold">Students Helped</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">500+</div>
            <div className="text-blue-200 uppercase tracking-wide text-sm font-semibold">Partner Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">95%</div>
            <div className="text-blue-200 uppercase tracking-wide text-sm font-semibold">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

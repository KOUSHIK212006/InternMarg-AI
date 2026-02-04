
import React from 'react';

const PMSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <div className="w-64 h-64 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png/800px-Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png" 
              alt="Prime Minister Narendra Modi" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
            />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-wider">Empowering India's Youth</h3>
            <p className="text-xl italic text-slate-700 leading-relaxed mb-6">
              "Our youth are the future of our nation. Through initiatives like the PM Internship Scheme, we are providing opportunities for skill development and practical experience that will shape the India of tomorrow."
            </p>
            <div className="font-bold text-blue-700">— Narendra Modi, Prime Minister of India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMSection;

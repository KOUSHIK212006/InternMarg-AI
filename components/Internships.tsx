
import React, { useState } from 'react';
import { Internship } from '../types';

interface InternshipsProps {
  recommendations: Internship[];
  isLoading: boolean;
}

const Internships: React.FC<InternshipsProps> = ({ recommendations, isLoading }) => {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  if (isLoading) {
    return (
      <section className="py-20 bg-white min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600 font-medium">AI is matching best internships for you...</p>
        </div>
      </section>
    );
  }

  const items = recommendations.length > 0 ? recommendations : [
    { id: '1', title: 'Data Science Intern', location: 'Delhi, Remote', duration: '3 months', description: 'Work with government datasets to analyze policy impacts and create visualizations.', tags: ['Python', 'ML', 'Viz'], badge: 'New' as const },
    { id: '2', title: 'AgriTech Specialist', location: 'Punjab, On-site', duration: '6 months', description: 'Implement IoT solutions for smart farming and analyze agricultural data.', tags: ['IoT', 'Data', 'Agri'], badge: 'Popular' as const },
    { id: '3', title: 'Digital Marketing', location: 'Mumbai, Hybrid', duration: '4 months', description: 'Create content and manage social media for government awareness campaigns.', tags: ['Social', 'SEO', 'Ads'], badge: 'High Demand' as const },
  ];

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Top Internship Recommendations</h2>
          <p className="text-slate-600">Handpicked opportunities based on your profile and preferences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(intern => (
            <div key={intern.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="p-6 border-b border-slate-50 flex justify-between items-start">
                <h3 className="text-xl font-bold text-blue-900">{intern.title}</h3>
                {intern.badge && (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${
                    intern.badge === 'New' ? 'bg-green-100 text-green-700' : 
                    intern.badge === 'Popular' ? 'bg-blue-100 text-blue-700' : 
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {intern.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <i className="fas fa-map-marker-alt text-blue-500"></i>
                  <span>{intern.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <i className="fas fa-clock text-blue-500"></i>
                  <span>{intern.duration}</span>
                </div>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {intern.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {intern.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <button 
                  onClick={() => setSelectedInternship(intern)}
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedInternship && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
              <button 
                onClick={() => setSelectedInternship(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-white/20 text-[10px] font-bold px-2 py-1 rounded uppercase">Internship</span>
                {selectedInternship.badge && <span className="bg-yellow-400 text-blue-900 text-[10px] font-bold px-2 py-1 rounded uppercase">{selectedInternship.badge}</span>}
              </div>
              <h3 className="text-3xl font-extrabold">{selectedInternship.title}</h3>
              <p className="text-blue-100 flex items-center gap-2 mt-2">
                <i className="fas fa-map-marker-alt"></i> {selectedInternship.location}
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Duration</p>
                  <p className="font-bold text-slate-800 flex items-center gap-2">
                    <i className="fas fa-calendar-alt text-blue-500"></i> {selectedInternship.duration}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Stipend</p>
                  <p className="font-bold text-slate-800 flex items-center gap-2">
                    <i className="fas fa-money-bill-wave text-green-500"></i> ₹5,000 / month
                  </p>
                </div>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Description</h4>
              <p className="text-slate-600 leading-relaxed mb-8">
                {selectedInternship.description} This is a unique opportunity under the PM Internship Scheme to gain practical experience and contribute to nation-building initiatives.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedInternship.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => { alert('Application submitted successfully!'); setSelectedInternship(null); }}
                  className="flex-grow bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-200"
                >
                  Apply Now
                </button>
                <button className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition">
                  <i className="far fa-bookmark text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internships;

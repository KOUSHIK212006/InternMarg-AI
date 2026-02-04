
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-briefcase text-3xl text-blue-400"></i>
              <h2 className="text-2xl font-bold tracking-tight">Intern<span className="text-blue-300">Marg</span></h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              InternMarg is an AI-powered platform under the PM Internship Scheme, dedicated to connecting Indian students with meaningful internship opportunities.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map(s => (
                <a key={s} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <i className={`fab fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><button onClick={() => setCurrentPage(Page.Home)} className="hover:text-blue-400 transition">Home</button></li>
              <li><button onClick={() => setCurrentPage(Page.Features)} className="hover:text-blue-400 transition">Features</button></li>
              <li><button onClick={() => setCurrentPage(Page.HowItWorks)} className="hover:text-blue-400 transition">How It Works</button></li>
              <li><button onClick={() => setCurrentPage(Page.Internships)} className="hover:text-blue-400 transition">Internships</button></li>
              <li><button onClick={() => setCurrentPage(Page.Dashboard)} className="hover:text-blue-400 transition">Dashboard</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Support</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Student FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Company FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope mt-1 text-blue-400"></i>
                <span>info@intermarg.gov.in</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone mt-1 text-blue-400"></i>
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-blue-400"></i>
                <span>Ministry of Education, Government of India, New Delhi</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>&copy; 2024 PM Internship Scheme - Government of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

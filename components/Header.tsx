
import React from 'react';
import { Page, UserProfile } from '../types';
import VoiceButton from './VoiceButton';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  language: string;
  setLanguage: (lang: string) => void;
  user: UserProfile | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, language, setLanguage, user, onLogout }) => {
  const languages = ["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"];

  return (
    <>
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fas fa-gem text-blue-400"></i>
            <span className="font-semibold">PM Internship Scheme | Government of India</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-blue-300 transition"><i className="fas fa-headset mr-1"></i> Need Help?</span>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage(Page.Home)}>
            <i className="fas fa-briefcase text-3xl text-blue-600"></i>
            <h2 className="text-2xl font-bold text-blue-900">Intern<span className="text-blue-500">Marg</span></h2>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {[
                { id: Page.Home, label: 'Home' },
                { id: Page.Features, label: 'Features' },
                { id: Page.HowItWorks, label: 'How It Works' },
                { id: Page.Internships, label: 'Internships' },
                { id: Page.Dashboard, label: 'Dashboard' }
              ].map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => setCurrentPage(item.id)}
                    className={`font-medium transition-colors border-b-2 ${currentPage === item.id ? 'text-blue-600 border-blue-600' : 'text-slate-700 border-transparent hover:text-blue-500 hover:border-blue-300'}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-slate-200 transition">
                <i className="fas fa-globe"></i>
                <span>{language}</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-xl rounded-lg overflow-hidden hidden group-hover:block border border-slate-100">
                {languages.map(lang => (
                  <button 
                    key={lang} 
                    onClick={() => setLanguage(lang)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <VoiceButton />

            {user ? (
              <div className="flex gap-2">
                 <button onClick={() => setCurrentPage(Page.Dashboard)} className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-md font-semibold hover:bg-blue-200 transition">Dashboard</button>
                 <button onClick={onLogout} className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-md font-semibold hover:bg-slate-200 transition">Logout</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => setCurrentPage(Page.Login)} className="text-blue-600 border border-blue-600 px-4 py-1.5 rounded-md font-semibold hover:bg-blue-50 transition">Login</button>
                <button onClick={() => setCurrentPage(Page.Register)} className="bg-blue-600 text-white px-4 py-1.5 rounded-md font-semibold hover:bg-blue-700 transition">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

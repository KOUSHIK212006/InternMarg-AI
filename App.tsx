
import React, { useState, useEffect, useCallback } from 'react';
import { Page, UserProfile, Internship } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import PMSection from './components/PMSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Internships from './components/Internships';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { getInternshipRecommendations } from './services/geminiService';

const INITIAL_USER: UserProfile = {
  name: "Rahul Sharma",
  role: "Student",
  completion: 65,
  skills: ["Python", "Data Analysis", "Communication"]
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [language, setLanguage] = useState<string>("English");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [recommendedInternships, setRecommendedInternships] = useState<Internship[]>([]);
  const [isLoadingRecs, setIsLoadingRecs] = useState(false);

  const handleLogin = useCallback(() => {
    setUser(INITIAL_USER);
    setCurrentPage(Page.Dashboard);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    setCurrentPage(Page.Home);
  }, []);

  const fetchRecommendations = useCallback(async () => {
    setIsLoadingRecs(true);
    try {
      const skills = user?.skills || ["Technology", "Engineering"];
      const recs = await getInternshipRecommendations(skills, language);
      setRecommendedInternships(recs);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setIsLoadingRecs(false);
    }
  }, [user, language]);

  useEffect(() => {
    if (currentPage === Page.Internships || currentPage === Page.Dashboard) {
      fetchRecommendations();
    }
  }, [currentPage, fetchRecommendations]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero onFindClick={() => setCurrentPage(Page.Internships)} />
            <PMSection />
            <Features />
            <HowItWorks />
            <Internships 
              recommendations={recommendedInternships} 
              isLoading={isLoadingRecs} 
            />
          </>
        );
      case Page.Features: return <Features />;
      case Page.HowItWorks: return <HowItWorks />;
      case Page.Internships: return <Internships recommendations={recommendedInternships} isLoading={isLoadingRecs} />;
      case Page.Dashboard: return user ? <Dashboard user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} onSwitchToRegister={() => setCurrentPage(Page.Register)} />;
      case Page.Login: return <Login onLogin={handleLogin} onSwitchToRegister={() => setCurrentPage(Page.Register)} />;
      case Page.Register: return <Register onRegister={handleLogin} onSwitchToLogin={() => setCurrentPage(Page.Login)} />;
      default: return <Hero onFindClick={() => setCurrentPage(Page.Internships)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== Page.Dashboard && (
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          language={language}
          setLanguage={setLanguage}
          user={user}
          onLogout={handleLogout}
        />
      )}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {currentPage !== Page.Dashboard && <Footer setCurrentPage={setCurrentPage} />}
      
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} language={language} />
      
      <div 
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-700 transition-all z-50"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <i className={`fas ${isChatOpen ? 'fa-times' : 'fa-comment-dots'} text-xl`}></i>
      </div>
    </div>
  );
};

export default App;

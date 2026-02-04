
import React, { useState } from 'react';
import { UserProfile, Internship } from '../types';

interface DashboardProps {
  user: UserProfile;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-xl shadow-blue-100">
              <div className="max-w-lg mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl font-extrabold mb-3">Welcome back, {user.name.split(' ')[0]}!</h2>
                <p className="text-blue-100 leading-relaxed mb-6 opacity-90">
                  Your AI-powered internship recommendations are ready. We've matched 12 new opportunities based on your skills in {user.skills.join(", ")}.
                </p>
                <button 
                  onClick={() => alert('Profile update modal opened!')}
                  className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-bold shadow-md hover:bg-blue-50 transition"
                >
                  Complete My Profile
                </button>
              </div>
              <div className="relative w-32 h-32 shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                  <circle cx="64" cy="64" r="56" fill="transparent" stroke="white" strokeWidth="8" strokeDasharray="351.8" strokeDashoffset={351.8 - (351.8 * user.completion / 100)} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
                  {user.completion}%
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Recommended', val: '12', icon: 'fa-compass', color: 'blue' },
                { label: 'Applied', val: '5', icon: 'fa-check-circle', color: 'green' },
                { label: 'Saved', val: '8', icon: 'fa-bookmark', color: 'yellow' }
              ].map(stat => (
                <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition">
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">{stat.label}</p>
                    <h3 className="text-3xl font-extrabold text-slate-800">{stat.val}</h3>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center text-xl transition-all group-hover:scale-110`}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recommendations Mini List */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                  <h3 className="text-lg font-extrabold text-slate-800">Best Matches For You</h3>
                  <button onClick={() => setActiveTab('Discover')} className="text-blue-600 text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  {[
                    { title: 'AI Research Intern', loc: 'Bangalore, Hybrid', type: 'Best Match', color: 'blue' },
                    { title: 'Policy Analyst', loc: 'New Delhi, On-site', type: 'Government', color: 'indigo' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition">{item.title}</h4>
                        <span className={`bg-${item.color}-100 text-${item.color}-700 text-[10px] font-bold px-2 py-0.5 rounded-full`}>{item.type}</span>
                      </div>
                      <div className="flex items-center text-xs text-slate-500 mb-4">
                        <i className="fas fa-map-marker-alt mr-1 text-slate-400"></i>
                        <span>{item.loc}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-100"></span>
                        </div>
                        <button onClick={() => alert(`Details for ${item.title}`)} className="text-blue-600 hover:text-blue-800"><i className="fas fa-arrow-right"></i></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Path */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                 <div className="p-6 border-b border-slate-50">
                   <h3 className="text-lg font-extrabold text-slate-800">Your AI Career Path</h3>
                 </div>
                 <div className="p-8">
                   <div className="relative border-l-2 border-blue-100 ml-4 space-y-12">
                     {[
                       { status: 'current', title: 'Current: Student', sub: 'CS Engineering, Final Year', icon: 'fa-graduation-cap' },
                       { status: 'next', title: 'Next: AI Intern', sub: 'Ministry of Electronics & IT', icon: 'fa-briefcase' },
                       { status: 'future', title: 'Future: AI Engineer', sub: 'Public Sector Tech Hub', icon: 'fa-rocket' }
                     ].map((step, i) => (
                       <div key={i} className="relative pl-10">
                         <div className={`absolute -left-[21px] top-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${step.status === 'current' ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                           <i className={`fas ${step.icon} text-sm`}></i>
                         </div>
                         <h4 className={`font-bold ${step.status === 'current' ? 'text-blue-600' : 'text-slate-700'}`}>{step.title}</h4>
                         <p className="text-sm text-slate-500">{step.sub}</p>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'Discover':
        return (
          <div className="bg-white p-8 rounded-2xl border border-slate-100 animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold mb-6">Discover Opportunities</h3>
            <p className="text-slate-600">Browse and filter thousands of government internships across India.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-40 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">Search Filter Interface Placeholder</div>
              <div className="h-40 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">Map Integration Placeholder</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 py-20 animate-in fade-in">
            <i className={`fas fa-hammer text-6xl mb-4 opacity-20`}></i>
            <h3 className="text-xl font-bold uppercase tracking-widest">{activeTab} section under development</h3>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <div className={`${isSidebarCollapsed ? 'w-20' : 'w-72'} bg-blue-900 text-white flex-shrink-0 flex flex-col transition-all duration-300`}>
        <div className="p-6 flex items-center justify-between border-b border-blue-800">
          {!isSidebarCollapsed && (
            <div className="flex items-center gap-2">
              <i className="fas fa-briefcase text-2xl"></i>
              <span className="text-xl font-bold tracking-tight">PM Internship</span>
            </div>
          )}
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="hover:bg-blue-800 p-2 rounded-lg">
            <i className={`fas ${isSidebarCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto">
          <div className={`mb-8 ${isSidebarCollapsed ? 'text-center' : ''}`}>
            <div className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'gap-4'} mb-4`}>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-xl shadow-inner border-2 border-blue-600">
                <i className="fas fa-user"></i>
              </div>
              {!isSidebarCollapsed && (
                <div>
                  <h4 className="font-bold">{user.name}</h4>
                  <p className="text-xs text-blue-300 uppercase tracking-widest">{user.role}</p>
                </div>
              )}
            </div>
            {!isSidebarCollapsed && (
              <div className="bg-blue-800/50 p-4 rounded-xl border border-blue-700">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-blue-300">Profile Completion</span>
                  <span className="font-bold">{user.completion}%</span>
                </div>
                <div className="w-full bg-blue-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full" style={{ width: `${user.completion}%` }}></div>
                </div>
              </div>
            )}
          </div>

          <nav>
            <ul className="space-y-2">
              {[
                { icon: 'fa-home', label: 'Dashboard' },
                { icon: 'fa-compass', label: 'Discover' },
                { icon: 'fa-bookmark', label: 'Saved' },
                { icon: 'fa-file-alt', label: 'Applications' },
                { icon: 'fa-chart-pie', label: 'Career Path' },
                { icon: 'fa-cog', label: 'Settings' }
              ].map(item => (
                <li key={item.label}>
                  <button 
                    onClick={() => setActiveTab(item.label)}
                    className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 rounded-xl transition-all ${activeTab === item.label ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-200 hover:bg-blue-800 hover:text-white'}`}>
                    <i className={`fas ${item.icon} w-5`}></i>
                    {!isSidebarCollapsed && <span className="font-medium">{item.label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-6 border-t border-blue-800">
          <button 
            onClick={onLogout}
            className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center' : 'gap-4 px-4'} py-3 text-red-300 hover:bg-red-500/10 hover:text-red-400 transition-all rounded-xl`}
          >
            <i className="fas fa-sign-out-alt w-5"></i>
            {!isSidebarCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-bold text-slate-800">{activeTab}</h2>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input type="text" placeholder="Search internships..." className="pl-10 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64" />
            </div>
            <button onClick={() => alert('No new notifications')} className="relative text-slate-500 hover:text-blue-600">
              <i className="fas fa-bell"></i>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs uppercase">
                {user.name.charAt(0)}
              </div>
              <span className="font-semibold text-slate-700 text-sm hidden sm:block">{user.name.split(' ')[0]}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Area */}
        <div className="flex-grow p-8 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

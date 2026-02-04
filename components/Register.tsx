
import React from 'react';

interface RegisterProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister, onSwitchToLogin }) => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            <i className="fas fa-user-plus"></i>
          </div>
          <h2 className="text-3xl font-bold text-blue-900">Create Account</h2>
          <p className="text-slate-500 text-sm mt-1">Start your journey with PM Internship AI</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onRegister(); }} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
               <input type="text" placeholder="Rahul" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
               <input type="text" placeholder="Sharma" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
             </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <input type="email" placeholder="rahul@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
               <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Confirm</label>
               <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
             </div>
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-5 h-5 rounded text-blue-600 border-slate-300 focus:ring-blue-500" required />
              <span className="text-xs text-slate-500 leading-tight">I agree to the <a href="#" className="text-blue-600 font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 font-bold hover:underline">Privacy Policy</a> of PM Internship Scheme.</span>
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition active:scale-[0.98]"
          >
            Create Your Account
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            Already have an account? 
            <button onClick={onSwitchToLogin} className="text-blue-600 font-bold ml-1 hover:underline">Login here</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;

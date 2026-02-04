
export enum Page {
  Home = 'home',
  Features = 'features',
  HowItWorks = 'how-it-works',
  Internships = 'internships',
  Dashboard = 'dashboard',
  Login = 'login',
  Register = 'register',
  Contact = 'contact'
}

export interface Internship {
  id: string;
  title: string;
  location: string;
  duration: string;
  description: string;
  tags: string[];
  badge?: 'New' | 'Popular' | 'High Demand';
}

export interface UserProfile {
  name: string;
  role: string;
  completion: number;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

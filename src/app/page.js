import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Home : Work Manager",
  description: "A comprehensive task management and todo application.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      <main className="flex-grow flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
        
        {/* Background Decorative Rings */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-3xl mix-blend-overlay"></div>
            <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-3xl mix-blend-overlay"></div>
        </div>

        <div className="z-10 animate-fade-in-up">
          <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl mb-6">
            <span className="block drop-shadow-md">Manage your work</span>
            <span className="block text-indigo-200 drop-shadow-md mt-2">Effortlessly</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-indigo-100/90 font-light">
            Work Manager is the ultimate tool to organize your tasks, boost your productivity, and stay on top of everything you need to do.
          </p>
          
          <div className="mt-10 sm:flex sm:justify-center gap-4">
            <div className="rounded-md shadow-lg shadow-indigo-900/50 hover:-translate-y-1 transition-transform duration-300">
              <Link 
                href="/pages/showTasks" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-4 sm:mt-0 rounded-md shadow-lg shadow-blue-900/50 hover:-translate-y-1 transition-transform duration-300">
              <Link 
                href="/pages/login" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-500/30 backdrop-blur-sm border border-indigo-400/30 hover:bg-indigo-500/40 md:py-4 md:text-lg md:px-10"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase drop-shadow-sm">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to task
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Everything you need to manage your personal and professional tasks efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100 group">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 mb-6 font-bold shadow-inner">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Organize Tasks</h3>
              <p className="text-gray-500 leading-relaxed">Keep all your tasks in one place. Categorize them, set priorities, and never miss a deadline again with our intuitive dashboard.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-6 font-bold shadow-inner">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Track Progress</h3>
              <p className="text-gray-500 leading-relaxed">Monitor your task completion. Visually track your progress over time and stay motivated as you check things off your list.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-100 group">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 mb-6 font-bold shadow-inner">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">Boost Productivity</h3>
              <p className="text-gray-500 leading-relaxed">Work smarter. Reduce clutter and focus on what truly matters to you contextually, leading to a much more productive day.</p>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}

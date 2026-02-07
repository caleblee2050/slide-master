import React from 'react';
import Hero from './components/Hero';
import PromptGrid from './components/PromptGrid';

function App() {
    return (
        <div className="min-h-screen bg-[#030014] text-gray-100 font-sans selection:bg-purple-500/30">
            <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-[#030014]/80 px-4 backdrop-blur-md md:px-8">
                <div className="text-lg font-bold tracking-tighter text-white">
                    Slide<span className="text-purple-500">Master</span>
                </div>
                <a href="https://notebooklm.google.com/" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Go to NotebookLM &rarr;
                </a>
            </nav>
            <main>
                <Hero />
                <div id="prompts">
                    <PromptGrid />
                </div>
            </main>
            <footer className="border-t border-white/5 py-12 text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Slide Master. Designed for NotebookLM Creators.</p>
            </footer>
        </div>
    );
}

export default App;

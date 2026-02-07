import React, { useState } from 'react';
import PromptCard from './PromptCard';
import { prompts } from '../data/prompts';
import { Search } from 'lucide-react';

export default function PromptGrid() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPrompts = prompts.filter(prompt =>
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="container mx-auto px-4 py-16">

            {/* Search Bar */}
            <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-lg">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Search className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-full border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Search styles (e.g., Claymation, Neon, Minimal...)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredPrompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                ))}
            </div>

            {filteredPrompts.length === 0 && (
                <div className="py-20 text-center text-gray-500">
                    <p className="text-xl">No styles found matching "{searchTerm}"</p>
                    <button
                        onClick={() => setSearchTerm('')}
                        className="mt-4 text-purple-400 hover:text-purple-300"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </section>
    );
}

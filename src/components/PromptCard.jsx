import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils'; // We need a utility for classes, or just use inline

// Simple utility function if not importing from separate file
const clsx = (...classes) => classes.filter(Boolean).join(' ');

export default function PromptCard({ prompt }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt.prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
        >
            {/* Decorative Gradient Background on Hover */}
            <div className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Image Thumbnail or Fallback Icon */}
            <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-800 shadow-lg">
                <img
                    src={prompt.image}
                    alt={`${prompt.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white" style={{ display: prompt.image ? 'none' : 'flex' }}>
                    <FileText className="h-10 w-10 opacity-50" />
                </div>
                {/* Overlay gradient for text readability if needed, though text is below */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div>
                <h3 className="mb-2 text-xl font-bold text-white">{prompt.title}</h3>
                <p className="mb-6 text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {prompt.description}
                </p>
            </div>

            <div className="mt-auto">
                <button
                    onClick={handleCopy}
                    className={clsx(
                        "flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                        copied
                            ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                            : "bg-white/10 text-white hover:bg-white/20 group-hover:bg-purple-600 group-hover:text-white"
                    )}
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-4 w-4" />
                            <span>Copy Directives</span>
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
}

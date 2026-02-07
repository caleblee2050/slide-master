import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#030014] px-4 pt-20 text-center md:flex-row md:px-12 md:text-left lg:px-20">

            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 flex flex-col items-center md:items-start md:w-1/2"
            >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-purple-300 backdrop-blur-md">
                    <Sparkles className="h-3 w-3" />
                    <span>NotebookLM 슬라이드 지침서</span>
                </div>

                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
                    상상을 뛰어넘는 <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        슬라이드를 만드세요
                    </span>
                </h1>

                <p className="mb-8 max-w-lg text-lg text-gray-400 md:text-xl break-keep">
                    NotebookLM 프레젠테이션을 위한 20가지 프리미엄 비주얼 스타일을 만나보세요.
                    시네마틱 사이버펑크부터 핸드메이드 점토 애니메이션까지, 당신의 모든 슬라이드를 작품으로 만들어 드립니다.
                </p>

                <button
                    onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                    className="group relative flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-lg font-bold text-black transition-all hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    <span className="relative z-10">스타일 탐색하기</span>
                    <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </button>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative mt-12 flex w-full justify-center md:mt-0 md:w-1/2"
            >
                <div className="relative aspect-square w-full max-w-lg lg:max-w-2xl">
                    {/* Glowing distinct aura behind image */}
                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-purple-500/40 to-blue-500/40 blur-3xl" />

                    <img
                        src="/hero-illustration.png"
                        alt="Futuristic Slide Creation"
                        className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </motion.div>
        </section>
    );
}

import React from 'react';
import { ArrowRight, Cpu, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-deep-black">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-intel-blue/20 rounded-full blur-[120px] opacity-30" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[100px] opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan mb-8"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                    </span>
                    <span className="text-sm font-semibold tracking-wide">3월 30일 개강 • 수강생 모집 중</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-tight"
                >
                    AI 교육? 아니, 이건<br />
                    <span className="text-gradient">커리어 치트키</span>야.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto px-4"
                >
                    단순한 코딩 강의가 아닙니다. <br className="md:hidden" />
                    인텔® 기술로 나만의 AI 서비스를 만들어<br className="hidden md:block" />
                    취업은 물론, <strong>1인 창업(Solopreneur)</strong>의 꿈까지 실현하세요.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => window.open('https://forms.gle/EQ7d5fWqK8j6jX5E8', '_blank')}
                        className="w-full md:w-auto px-8 py-4 bg-neon-cyan text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        지금 바로 지원하기 <ArrowRight className="w-5 h-5" />
                    </button>
                    <a
                        href="#curriculum"
                        className="w-full md:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/5 transition-all text-center"
                    >
                        커리큘럼 보기
                    </a>
                </motion.div>

                {/* Stats / Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { icon: <Cpu className="w-6 h-6 text-intel-blue" />, text: "Intel® AI 기술 인증" },
                        { icon: <Code className="w-6 h-6 text-neon-purple" />, text: "NCsoft 실무 프로젝트" },
                        { icon: <Rocket className="w-6 h-6 text-neon-cyan" />, text: "교육비 0원 전액무료" },
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card p-4 flex items-center justify-center gap-3">
                            {item.icon}
                            <span className="font-medium text-gray-200">{item.text}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

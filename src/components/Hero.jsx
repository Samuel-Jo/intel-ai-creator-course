import React from 'react';
import { ArrowRight, Cpu, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import AiAppCreatorSection from './AiAppCreatorSection';
import qrImage from '../assets/images/qr.png';
import intelimg04 from '../assets/images/intelimg04.jpg';


const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-10 overflow-hidden bg-deep-black">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-intel-blue/20 rounded-full blur-[120px] opacity-30" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[100px] opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                {/* VISUAL REFERENCE IMAGE REPLACEMENT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-8 max-w-7xl mx-auto"
                >
                    <AiAppCreatorSection />
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
                    <div className="flex-1 z-20">
                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-bold leading-tight mb-4 tracking-tighter text-white"
                        >
                            Future<br />
                            Workforce
                            <div className="h-2 w-24 bg-intel-green mt-4 rounded-full"></div>
                        </motion.h1>

                        {/* Sub Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-6"
                        >
                            <p className="text-2xl text-slate-300 font-light mb-2">
                                <span className="font-semibold text-white">intel.</span> digital readiness
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                                단순한 코딩 강의가 아닙니다. 인텔® 기술로 나만의 AI 서비스를 만들어 취업은 물론, 1인 창업(Solopreneur)의 꿈까지 실현하세요.
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <button
                                onClick={() => window.open('https://forms.gle/SWK34KxYgNRNz9KJ9', '_blank')}
                                className="px-8 py-4 bg-intel-green text-black font-bold text-lg rounded-xl hover:bg-white transition-all shadow-lg flex items-center gap-2 group w-full sm:w-auto justify-center"
                            >
                                지금 바로 지원하기
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="https://k-digital-16432217829.us-west1.run.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-white/10 text-slate-300 font-semibold text-lg rounded-xl hover:bg-white/5 hover:text-white transition-all hover:border-intel-green/50 w-full sm:w-auto text-center"
                            >
                                커리큘럼 보기
                            </a>
                            <div className="p-2 bg-white rounded-xl shadow-lg">
                                <img src={qrImage} alt="QR Code" className="w-24 h-24 object-contain" />
                            </div>
                        </motion.div>


                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:flex-[1.8] relative w-full flex flex-col gap-4"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-full h-full bg-intel-green/5 rounded-full blur-[100px] -z-10"></div>

                        {/* Image Composition */}
                        <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 group mb-6">
                            <img
                                src={intelimg04}
                                alt="Intel AI Training"
                                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>


                    </motion.div>
                </div>

                {/* Bottom Curve Decoration */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-intel-green/10 rounded-full blur-[80px]"></div>


                {/* Stats / Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {[
                        { icon: <Cpu className="w-6 h-6 text-intel-blue" />, text: "Intel® AI 기술 인증" },
                        { icon: <Code className="w-6 h-6 text-neon-purple" />, text: "NCsoft 실무 프로젝트" },
                        { icon: <Rocket className="w-6 h-6 text-neon-cyan" />, text: "교육비 0원 전액무료" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.2)] hover:-translate-y-2 transition-all duration-300 group">
                            <div className="bg-slate-50 p-4 rounded-full group-hover:bg-white group-hover:shadow-lg transition-all duration-300 ring-1 ring-slate-100">
                                {React.cloneElement(item.icon, { className: `w-8 h-8 ${idx === 0 ? 'text-intel-blue' : idx === 1 ? 'text-neon-purple' : 'text-neon-cyan'}` })}
                            </div>
                            <div className="text-center md:text-left">
                                <span className="font-extrabold text-slate-800 text-lg md:text-xl tracking-tight whitespace-nowrap group-hover:text-black transition-colors">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section >
    );
};

export default Hero;

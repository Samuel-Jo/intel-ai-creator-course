
import React from 'react';
import { motion } from 'framer-motion';

const DigitalReadinessSection = () => {
    return (
        <section className="bg-deep-black pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <a
                        href="https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/digital-readiness-ai-for-future-workforce.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group relative overflow-hidden rounded-3xl"
                    >
                        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] lg:aspect-[3/1] overflow-hidden">
                            <img
                                src="/images/intelimg01.jpg"
                                alt="Intel Digital Readiness Programs"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient Overlay for Text Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30 flex flex-col justify-center px-8 md:px-16">
                                <div className="max-w-2xl">
                                    <p className="text-intel-green font-bold tracking-widest uppercase mb-2">Official Program</p>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        Intel® Digital Readiness Programs
                                    </h2>
                                    <p className="text-slate-200 text-lg md:text-xl font-light">
                                        AI for Future Workforce
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-6 right-6">
                            <span className="inline-flex items-center gap-2 text-white/80 text-sm bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:bg-intel-green group-hover:text-black transition-colors duration-300">
                                자세히 보기 <span className="text-lg">→</span>
                            </span>
                        </div>
                    </a>
                    <p className="text-center text-slate-500 text-sm mt-4">
                        * 이미지를 클릭하시면 인텔 홈페이지로 연결됩니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalReadinessSection;

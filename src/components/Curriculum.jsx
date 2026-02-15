import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Rocket } from 'lucide-react';

const subjects = [
    {
        category: 'APP Process',
        icon: <Code2 className="w-8 h-8 text-neon-cyan" />,
        title: 'SW 개발 기초 & 앱 프로그래밍',
        desc: 'Java부터 안드로이드 앱 개발까지, 탄탄한 SW 기본기 완성',
        details: [
            'Java Programming & Computational Thinking',
            'Data Structure & DB Programming',
            'Android App Programming',
            'UI/UX 디자인 기초 및 실습',
            '알고리즘 및 코딩 테스트 대비'
        ]
    },
    {
        category: 'AI Process',
        icon: <Cpu className="w-8 h-8 text-intel-blue" />,
        title: 'AI 핵심 기술 & 딥러닝',
        desc: 'AI Awareness부터 Capstone까지, 현업 수준의 AI 기술 습득',
        details: [
            'AI Awareness',
            'AI Foundation',
            'AI Experience (실습 중심)',
            'Computer Vision, NLP, Stat 기초',
            'AI Capstone 프로젝트 기획',
            'Intel® OpenVINO™ & Geti 활용'
        ]
    },
    {
        category: 'Practical Projects',
        icon: <Rocket className="w-8 h-8 text-neon-purple" />,
        title: '4대 실무 프로젝트',
        desc: '기업 수요 기반의 실전 프로젝트로 포트폴리오 완벽 대비',
        details: [
            'Computer Vision 도메인 프로젝트',
            'NLP (자연어 처리) 도메인 프로젝트',
            'Statistics (통계) 도메인 프로젝트',
            'App 서비스 개발 프로젝트',
            'Final Capstone (Intel OpenVINO/Geti/Tiber)',
            '포트폴리오 작성 및 발표'
        ]
    }
];

const Curriculum = () => {
    return (
        <section id="curriculum" className="py-20 bg-deep-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-cyan font-bold tracking-widest uppercase text-sm mb-2 block">Systematic Curriculum</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        체계적인 <span className="text-gradient-premium">3단계 로드맵</span>
                    </h2>
                    <p className="text-slate-400">기초 문법부터 인텔/NCsoft 연계 실전 프로젝트까지 한번에.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {subjects.map((subject, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-10 flex flex-col h-full group relative overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-intel-blue/10 rounded-full blur-[60px] group-hover:bg-neon-cyan/20 transition-all duration-500" />

                            <div className="flex items-center gap-5 mb-8 relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-neon-cyan/10 group-hover:text-neon-cyan transition-colors duration-300 border border-white/5">
                                    {subject.icon}
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-intel-blue uppercase tracking-wider block mb-1">{subject.category}</span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{subject.title}</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow relative z-10">
                                {subject.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-300 group-hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 min-w-[6px] bg-white/30 rounded-full mr-3 mt-1.5 group-hover:bg-neon-cyan transition-colors" />
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="relative z-10 pt-6 border-t border-white/5">
                                <p className="text-sm text-slate-500 italic group-hover:text-slate-400 transition-colors">"{subject.desc}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Layers, Trophy, Code2, Rocket } from 'lucide-react';

const subjects = [
    {
        category: 'Foundation',
        icon: <BookOpen className="w-8 h-8 text-neon-cyan" />,
        title: 'AI 개발 기초',
        desc: '인공지능의 이해부터 파이썬, 딥러닝 핵심까지 탄탄한 기본기 완성',
        details: [
            'AI 역사와 발전, 머신러닝/딥러닝 기본',
            'CNN, RNN 등 주요 AI 모델 아키텍처 이해',
            'LLM, sLM, Diffusion 모델 개념과 활용',
            '효과적인 프롬프트 엔지니어링 기법',
            '파이썬(Python) 핵심 문법 (Class, Func)',
            'Numpy, Pandas 데이터 분석 라이브러리 실습'
        ]
    },
    {
        category: 'Core Tech',
        icon: <Cpu className="w-8 h-8 text-intel-blue" />,
        title: 'AI 핵심 기술 심화',
        desc: '현업 수준의 데이터 분석, NLP, 생성형 AI 기술 습득',
        details: [
            'EDA (탐색적 데이터 분석) 및 시각화',
            '텍스트 전처리, 임베딩, Transformer 모델',
            'Fine-tuning 및 RAG (검색 증강 생성) 구축',
            'GAN (생성적 적대 신경망) 이해',
            'LLM 에이전트 및 멀티모달 AI 시스템 개발'
        ]
    },
    {
        category: 'Project',
        icon: <Rocket className="w-8 h-8 text-neon-purple" />,
        title: '실전 앱 개발 및 배포',
        desc: 'NCsoft 등 기업 연계 프로젝트로 취업 경쟁력 확보',
        details: [
            'React 기초 및 동적 웹 UI 구현',
            'Flask/FastAPI 활용 RESTful API 서버 구축',
            'DB 연동 및 사용자 인증 시스템',
            'NCsoft 등 현업 기업 실제 문제 해결',
            '실무 프로세스 경험 (Git, Jira 협업)'
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
                        체계적인 <span className="text-gradient">3단계 로드맵</span>
                    </h2>
                    <p className="text-slate-400">기초 문법부터 인텔/NCsoft 연계 실전 프로젝트까지 한번에.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {subjects.map((subject, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col h-full hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-intel-blue/10 rounded-full blur-[50px] group-hover:bg-neon-cyan/20 transition-all" />

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors border border-white/5">
                                    {subject.icon}
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-intel-blue uppercase tracking-wider block mb-1">{subject.category}</span>
                                    <h3 className="text-xl font-bold text-white">{subject.title}</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-6 flex-grow relative z-10">
                                {subject.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 min-w-[6px] bg-white/30 rounded-full mr-3 group-hover:bg-neon-cyan transition-colors" />
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="relative z-10 pt-6 border-t border-white/5">
                                <p className="text-sm text-slate-500 italic">{subject.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;

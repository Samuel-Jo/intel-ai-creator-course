import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw, Code2, CheckCircle2 } from 'lucide-react';

const targets = [
    {
        icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
        title: "예비 창업자",
        desc: "AI 기술로 혁신적인 서비스를 만들어 시장에 출시하고 싶은 창업 도전자",
        details: ["MVP 제작 지원", "사업화 멘토링"]
    },
    {
        icon: <RefreshCw className="w-12 h-12 text-green-400" />,
        title: "비전공자 / 직무전환",
        desc: "코딩 경험이 없어도 걱정 NO. 기초부터 서비스 배포까지 완벽 가이드.",
        details: ["코딩 기초부터 시작", "비전공자 눈높이 교육"]
    },
    {
        icon: <Code2 className="w-12 h-12 text-neon-cyan" />,
        title: "IT 전공자",
        desc: "기존 개발 실력에 AI 전문성을 더해 차별화된 개발자가 되고 싶은 IT전공자",
        details: ["Deep Dive 기술", "고난이도 프로젝트"]
    }
];

const TargetAudience = () => {
    return (
        <section className="py-20 bg-deep-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-intel-blue font-bold tracking-widest uppercase text-sm mb-2 block">Who is this for?</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        누가 참여해야 하나요?
                    </h2>
                    <p className="text-slate-400">학력, 전공 무관! 열정만 있다면 누구나 AI 전문가가 될 수 있습니다.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 text-center hover:border-neon-cyan/50 transition-colors group"
                        >
                            <div className="bg-white/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-neon-cyan/10 group-hover:scale-110 transition-all duration-300">
                                {target.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">{target.title}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed h-14">
                                {target.desc}
                            </p>
                            <div className="border-t border-white/10 pt-6">
                                <ul className="flex flex-col gap-3 items-center">
                                    {target.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-neon-cyan" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;

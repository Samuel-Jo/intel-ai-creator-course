import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Wallet, Award, Laptop, Rocket } from 'lucide-react';

const benefits = [
    {
        icon: <Gamepad2 className="w-10 h-10 text-neon-purple" />,
        title: "NCsoft 실무 프로젝트",
        desc: "단순 견학이 아닙니다. NC AI와 함께 실제 기업 현업 과제를 수행하고 인턴십 기회까지 노려보세요.",
        highlight: "게임/AI 분야 취업 치트키"
    },
    {
        icon: <Wallet className="w-10 h-10 text-neon-cyan" />,
        title: "교육비 0원 + 훈련수당",
        desc: "내일배움카드만 있으면 약 1,000만원 상당의 교육이 전액 무료. 매월 최대 316,000원의 훈련 장려금도 지원됩니다.",
        highlight: "경제적 부담 ZERO"
    },
    {
        icon: <Award className="w-10 h-10 text-intel-blue" />,
        title: "Intel® 공식 인증서",
        desc: "글로벌 기업 인텔이 인증하는 'AI Creator' 수료증을 발급받아 이력서에 강력한 한 줄을 추가하세요.",
        highlight: "Global Certification"
    },
    {
        icon: <Laptop className="w-10 h-10 text-pink-500" />,
        title: "고성능 노트북 지원",
        desc: "AI 모델 학습에 필요한 고사양 노트북과 쾌적한 학습 공간을 교육 기간 동안 무상으로 대여해 드립니다.",
        highlight: "장비 걱정 끝"
    },
    {
        icon: <Rocket className="w-10 h-10 text-yellow-400" />,
        title: "1인 창업(Solopreneur) 지원",
        desc: "단순 취업을 넘어, 나만의 AI 서비스를 기획하고 개발하여 실제 수익 창출이 가능한 MVP까지 완성합니다.",
        highlight: "CEO로 성장"
    }
];

const Benefits = () => {
    return (
        <section id="benefits" className="py-24 bg-deep-black/50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-intel-blue/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        왜 <span className="text-gradient">Intel AI Creator</span> 과정인가요?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        다른 과정과는 비교불가! 오직 여기서만 화끈하게 지원해 드립니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-neon-cyan/30"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                                {item.icon}
                            </div>

                            <div className="mb-4">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.highlight}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;

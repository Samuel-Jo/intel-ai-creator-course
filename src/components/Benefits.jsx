import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Wallet, Award, Laptop, Rocket, Cpu } from 'lucide-react';

const benefits = [
    {
        icon: <Cpu className="w-10 h-10 text-intel-blue" />,
        title: "EDGE 1. 최고 수준의 강사진",
        desc: "Intel Korea 현직 기술 전문가 및 공인 인증 강사가 직접 지도하는 고품질 강의.",
        highlight: "Intel Tech Specialists"
    },
    {
        icon: <Gamepad2 className="w-10 h-10 text-neon-purple" />,
        title: "EDGE 2. 4대 실무 프로젝트",
        desc: "Computer Vision 도메인 프로젝트, NLP (자연어 처리) 도메인 프로젝트, App 서비스 개발 프로젝트, Final Capstone (Intel OpenVINO/Geti/Tiber), 포트폴리오 작성 및 발표",
        highlight: "Practical Projects"
    },
    {
        icon: <Wallet className="w-10 h-10 text-neon-cyan" />,
        title: "EDGE 3. 교육비 전액 무료",
        desc: "수강료 0원 + 훈련 장려금 매월 최대 816,000원 지원 (국민내일배움카드 소지자).",
        highlight: "Full Support"
    },
    {
        icon: <Laptop className="w-10 h-10 text-pink-500" />,
        title: "EDGE 4. 학습 리소스 무한 제공",
        desc: "고성능 노트북 무상 대여, 교육장 무제한 이용, 교재 및 스터디 그룹 운영 지원.",
        highlight: "Unlimited Resources"
    },
    {
        icon: <Award className="w-10 h-10 text-yellow-500" />,
        title: "EDGE 5. 1:1 밀착 관리",
        desc: "전문 멘토의 1:1 취업 컨설팅, 이력서/면접 코칭, 커리어 전략 수립 지원.",
        highlight: "Career Care"
    },
    {
        icon: <Rocket className="w-10 h-10 text-green-400" />,
        title: "EDGE 6. Global Impact Festival",
        desc: "우수 수료생 대상 Intel Global Impact Festival 참가 자격 부여 및 글로벌 무대 진출 기회.",
        highlight: "Global Opportunity"
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
                        압도적인 6가지 혜택 (EDGE)으로 여러분의 성장을 지원합니다.
                    </p>
                </motion.div>

                <div className="bento-grid">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-8 group relative overflow-hidden flex flex-col justify-between
                                ${index === 0 || index === 5 ? 'md:col-span-2' : 'md:col-span-1'}
                            `}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-neon-cyan/10 group-hover:text-neon-cyan transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-md">{item.highlight}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;

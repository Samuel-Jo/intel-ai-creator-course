
import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Briefcase, Code } from 'lucide-react';

const instructors = [
    {
        name: "홍승표",
        role: "Intel Korea Technical Solutions Specialist",
        highlight: "Cloud & AI Infrastructure Expert",
        desc: "클라우드, AI, 서버 GPU 기반 솔루션 기술 총괄. 인프라 현대화 및 온디바이스 AI 프로젝트 기술 코칭.",
        career: ["Intel RealSense Tech Product Manager", "한화테크윈 AI CCTV 상용화 리드"],
        color: "bg-intel-blue"
    },
    {
        name: "윤준보",
        role: "Intel Korea Tech Sales 상무",
        highlight: "AI Platform Advisor",
        desc: "LG그룹 대상 AI·컴퓨팅 기술 지원 총괄. Geti, OpenVINO, oneAPI 등 인텔 AI 플랫폼 기술 자문.",
        career: ["LG CNS 시스템 SW 엔지니어", "Sun Microsystems Tech Sales"],
        color: "bg-neon-purple"
    },
    {
        name: "김재민",
        role: "AI 정규 과정 메인 강사 (前 Intel Korea 상무)",
        highlight: "IoT & Edge Computing Leader",
        desc: "18년간 Intel 근무, AI/IoT/Edge 기술 전략 담당. 산업 현장 검증 AI 응용 사례 중심 교육.",
        career: ["前 Intel Korea 상무이사", "삼성전자/NCSoft 협력 프로젝트 다수"],
        color: "bg-neon-cyan"
    },
    {
        name: "김정욱",
        role: "Global AI Business Expert",
        highlight: "AI Industry Strategy",
        desc: "글로벌 AI 산업 동향 및 실무 적용 사례 피드백. 데이터 기반 의사결정 및 AI 품질/보안 가이드.",
        career: ["前 DELL Technologies 상무", "前 Microsoft 기술영업 부장"],
        color: "bg-pink-500"
    }
];

const Instructors = () => {
    return (
        <section id="instructors" className="py-24 bg-deep-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-intel-blue font-bold tracking-widest uppercase text-sm mb-2 block">World Class Instructors</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-gradient-premium">Intel 전문가</span>가 직접 가르칩니다
                    </h2>
                    <p className="text-slate-400">최고의 현업 전문가들과 함께하는 실무 프로젝트</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 flex flex-col h-full group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity ${instructor.color}`} />

                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${instructor.color} bg-opacity-20 text-white font-bold text-xl`}>
                                    {instructor.name[0]}
                                </div>
                                <Award className="w-6 h-6 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{instructor.name}</h3>
                                <p className="text-xs text-intel-blue font-bold uppercase tracking-tight mb-2">{instructor.highlight}</p>
                                <p className="text-sm text-slate-400 font-medium">{instructor.role}</p>
                            </div>

                            <div className="mb-6 flex-grow">
                                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                                    {instructor.desc}
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-4 mt-auto">
                                <ul className="space-y-2">
                                    {instructor.career.map((c, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                                            <Briefcase className="w-3 h-3 text-slate-600" />
                                            {c}
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

export default Instructors;
